import { useState } from "react";

import Galery from "./galery/Galery";

import Image from "next/image";

import { useRouter } from "next/router";

import {
  faChevronLeft,
  faChevronRight,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Office from "@/components/mainPage/main/vectors/office/Office";
import Box from "@/components/mainPage/main/vectors/box/Box";
import Fridge from "@/components/mainPage/main/vectors/fridge/Fridge";
import Warehouse from "@/components/mainPage/main/vectors/warehouse/Warehouse";

import style from "./objectDetails.module.scss";

const rentObjectsFromDB = [
  {
    type: "Офіси",
    // type: "Складське приміщення",
    // type: "Холодильне приміщення",
    // type: "Бокс",
    link: "https://lh3.googleusercontent.com/b0yh_xASMqxN5WIf4qrdtCKsq5aW0eAvE6nZzSTVj4AD4zXmfYIXQTAX0Ba4gfP56QkpW9m3H8EIJf8W8CEnJesQ-hkpY6gg2LBjWEvztCimPPTE5kFKiMxj5Vy8RsMC0ZgyX9vk0hSkgXNm8_FQY8ldhkqIdWrxM3_6JIdd7t3--D3ADA6NeaRi6JncJLXDmtYFKmqcoVtnMVbbY3UrIEM9FUut2BBUMuZxUWARv7HvxY5YaGby0JlotB2NsNjb8GMcY8ynZlhAZ9FwgRLkKzDlI5Wn5wiZL3DWtluza762ZWresWwTR_smBZCdNmvH19MTMythWFaiMj4oBIxYjAdW6xVxFJrLzCxBPvmCZB61kINxAQD6nlfe8rXsx3KbH0D4ZnvYTa49lTk3pDI2ANOJTYLxV_5StIzKUb0UBQMYQAsZW1YQ7_pHke6lahgK93w4pukG_BjGvXF7T7ZSDJsB4Ac4dWVLROTjcBqk_BD9bOiOZSOv3GEbHqYwwSeKuggHe8uywMs44gVNa-7HiF_H67uOgqw4j9ZWprWdEgDt96B-GsxNM81VY16bvYoOlBKa3bdm3mXYBUYdFp4MbKpnsdUAtpouEIiq6brjJcR8-us26ukNV2PitPLufz97HguIbycuSJLo-KWV6woxfo6bODUgLVPrHGA3TzJZEKKrjq0b34Z2F4H9PUYVjNXS0f2Wwoxxgq_wD2ViMzR_59XnU3ALsjbHiFM4xXz74OoEQYiVmFnfED_UVBsB8xfS8SpnXQz6eQLxbDl_1P8YmS6tgpOL-NlRbJKMvlPNzxntyfiRaZmOI_2JNSJgOWy9GrLvdMoNx8P6aqZDAv-6NNS6d4Fb_ih8qLgdcVa0MefxCISRhWEaUoStD_d4DEu3lSZ_A03M2H1Be3EjM8ePE-OgMvRspXGVwc15XAUUh2IjByyS=w1920-h865-s-no?authuser=0",
    m2: 20,
    location: "pion",
    price: 1000,
    exactAddres: "Вулиця Січневий Прорив 38А, Біла Церква, 09100",
    keyFeatures:
      "Приємний ремонт / Закрита територія / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація / Кондиціонер",
    id: 0,
    photos: [
      'https://lh3.googleusercontent.com/b0yh_xASMqxN5WIf4qrdtCKsq5aW0eAvE6nZzSTVj4AD4zXmfYIXQTAX0Ba4gfP56QkpW9m3H8EIJf8W8CEnJesQ-hkpY6gg2LBjWEvztCimPPTE5kFKiMxj5Vy8RsMC0ZgyX9vk0hSkgXNm8_FQY8ldhkqIdWrxM3_6JIdd7t3--D3ADA6NeaRi6JncJLXDmtYFKmqcoVtnMVbbY3UrIEM9FUut2BBUMuZxUWARv7HvxY5YaGby0JlotB2NsNjb8GMcY8ynZlhAZ9FwgRLkKzDlI5Wn5wiZL3DWtluza762ZWresWwTR_smBZCdNmvH19MTMythWFaiMj4oBIxYjAdW6xVxFJrLzCxBPvmCZB61kINxAQD6nlfe8rXsx3KbH0D4ZnvYTa49lTk3pDI2ANOJTYLxV_5StIzKUb0UBQMYQAsZW1YQ7_pHke6lahgK93w4pukG_BjGvXF7T7ZSDJsB4Ac4dWVLROTjcBqk_BD9bOiOZSOv3GEbHqYwwSeKuggHe8uywMs44gVNa-7HiF_H67uOgqw4j9ZWprWdEgDt96B-GsxNM81VY16bvYoOlBKa3bdm3mXYBUYdFp4MbKpnsdUAtpouEIiq6brjJcR8-us26ukNV2PitPLufz97HguIbycuSJLo-KWV6woxfo6bODUgLVPrHGA3TzJZEKKrjq0b34Z2F4H9PUYVjNXS0f2Wwoxxgq_wD2ViMzR_59XnU3ALsjbHiFM4xXz74OoEQYiVmFnfED_UVBsB8xfS8SpnXQz6eQLxbDl_1P8YmS6tgpOL-NlRbJKMvlPNzxntyfiRaZmOI_2JNSJgOWy9GrLvdMoNx8P6aqZDAv-6NNS6d4Fb_ih8qLgdcVa0MefxCISRhWEaUoStD_d4DEu3lSZ_A03M2H1Be3EjM8ePE-OgMvRspXGVwc15XAUUh2IjByyS=w1920-h865-s-no?authuser=0',
      'https://lh3.googleusercontent.com/htqp1Pl3FxJ9wjFMLselXhIZ0dOG3uVZNQr1HEHN-ID1B4nSTAz4J7SpF8-o90Fzj9lT3avd3V3pI9ATobJZ05SMqlo0gIVFRgzoGyp_tz0kscZB_0zXq6cc2BsQ562tdRIclzITu9mONDMV4SuexUrL9DGSLyxY7p135UY5AIhDZtnVsFAwXjbe8RuhZSnES5HGp1rFpa0ffnD4AoGtmxnajfHv8cZDdccjN-DY94dwdpc8Mpt2zC_PW1Opgy2nQrv4CXGxsuX09wc4dJUKg1LA2yoPurwAJtPOjhhzrTXWc6yXw4w-0QCdls9GXbmXShfZwCRaHKegsmN9js8bgBtm5ocu2ldco1hAcy17E9eh9A5CH3ksTad0UEwGVQhMOzPAi5BXsdrcR6eTAP-IDVkntiheq14McJ-S51p6--GqnIeCcUiYCdQ8jJ3c8EZNShMRCkVq4uLpt4rtVkrDSV2xVZ1V8JEGkFnza968BrlefDQfC7p2be9A7kaq2F73elBN9T-RUjPqQXRBa-mP_XBHB1ttnpoyLK3foNAPcbcYafuG4a6ZPMemkEg4Vbv7murec9p9Afe6Wjpoo3nnjf0S5kYdyQXWNCroU4IAWkwe5Szb5nc_oPUDzMM9ab_MeyJ1hsjfekM0__GBIcCp0nAxJpOn_DScy0lRM6GXxL0EIjoDb7fug7ABn5vRqLsj3KppuEAOj22jwuY6wrZAHv0SXxkwoqtYUXAD4KztGTcCfPW--2lthvFWosx33TC7HBhihxhsUFvikOuBhuFIx7yfkk3IInt99nT_XEThaNTCurTQm-N0yH9Ph1oWIOSpmjNEu5ZSHWwT7HvaSBqFVbqECkcKYZ2VDLqe8o24-kvXKJFbzPQPRwNCdqM_P-klJ-TZNH7zZKRq1ps0hNFrHgSZbc9LdqQBa98LKi00CWKX302b=w1920-h803-s-no?authuser=0',
      'https://lh3.googleusercontent.com/aq_V4cJRWbQigVjKiXOHdZvh0xOBMiod8manaHekrwFDjGIgtpRKsGbbkJkjG-53Uk7A92XjGQ06eyv0LWEBNMPyyOjYFMt7nJ4TE2y89ydHTwH7q8LyxqolvVRh42zx6tbgVZcyj7Hyj49LJr1W0UJVMiMQj0F_5n57NRPnU6o0kutbN1pRWeJT1Olafgv2T-n_HnC--TtL355B6qnaPyIth40pL5QJUhf3vrJy_KcbcXhB_fzfoZzQkEABVz4pcvoUMhPo2PRJbP_g4-HsM6mRPhEow1vv2Ayk2e7RkUNF88J2R9Tpu3Ws3kk5_WFqJFNXvWgKLTJTCdMVoNnqYm5fIrWJvZC0wMK7pGj066B0o5CJ1dNsB2oO0CwKCNA1ZmbBrudkCoAnZ5wtDYxCrJzVO-qAO0K8aqnUOjiCwzwvXXj2bq8JHeJ3vfktL6V2bYPKug3lypxEA9viCp5NjzgLjJxlH25IKzF8A6Y5YkU43tOKBbGHJp1ifLkFQ0Rg8rNDKBGjAnz2DSk4oTkyjJTIqyyo5FRwzgj86O01gCT6qz02IldrjKvc8QeFdQJXucwvj2ryR8RBfPNpUN9zDfct4o03f4zj8FpUt95P3ugHkKQYDCCx56nboUfOoGwu-zqEB4URePnG6_tvnZMRm99bJk-uGJp1MJ6AVpzd0bJfU0yfZ_SaZKgbC_PHe4UCbcWoQZY8iXEfyj8EuIqwfS-Rsxhzhsv3zY0aUJ1pzXBuzUCQZAQnrc30XL2ROCVf632vzcZmB76oFCnS2W1-PwS-ryjA349bJTnVAt8yBZKxTFLSEILNAeheQFoawEYeUi7pacgEIyNW91fNbIhZKY2uFVQdHUcxpul8cD8rrMyo0OqlVT6xOUg08eajm3FwXOYmnd9txAFd4c4x1UWHW1OM4vhxghNJYTkypt-B_XjfUOM0=w1920-h885-s-no?authuser=0',
      'https://lh3.googleusercontent.com/6neggcRRzY76JbhVtlKZp5AanrBSsH1Q61sSNAVBjz7LCCnDlPrfixZVsyB-JKaz_xwLtnbjTLGoFiwxBB_opfEXfI3ZSivJMJ27fc6v3qLjCrcAb7gNTN6ZOIhN0yjvPYEMFEkbBs5eDwfqT-pzSbhkw2IDpFulwIeqXFGy_W1Csv_LRLbztn8GzzJL1TBKv8amm4DkqMf_rjDl8CoI3-cG1vSFrWCA8h4buFCT-g9yXlUkEHqZ3NIqguN-lcSfbwwcz3DYZF2QynqvUOLYqSIhVq1c5W5NPnBC8leMKzneRjkpqFeC3RrKzBWxwcvQSln2fmlzEcK7dOGfzocnr9xYjHB6c9gqg6Gx065EJgaNumAKX1VUnk08RiBVHrRBRjrr0TAl0krAYpdLdRpRY3F41VCliO2IIHWRfxu79NoUAWovO2y21g1iVBkNoFBiRtqjGiWI3N19Y_CJ2fZyKGA0mzqYSK8EUr7n_Kjy2NjXe4Sr2r7qJekXuoN0ZAFvGst5Tjan87LNzY691vRW77Uxs4R6Le4dPvUjYMBci5lzlH676gHyhW-qkzMOokzlNUoeiZn5eoPRQFlm4UytOQgt3wm0S9giIiTz-IISHo14ekyGHm6puLWA5qWUeNbIYEzGiset19B3HftHPWFTfgzocbtyWDpd-RWqWAu_9qofeKknwt4RoJjKZWSbzbANMNmhh765oAgOVWVQqJRileG08_b7BgpNH1gAJ-kXGZiKmhCUVMvv4jBiUZxpHPMIosR6jnx0MnsfKtmMoevHalSyDf-vblzA7S216f4skECiPU7HUdGIsWxpTXo3ldNIgn9tVyEHqCItPtiVmGK2y3wyvGWjJo3y2rQthFmy6zSnoM4aNuzR5QwX2IChoSgc-dUjcNMIbFSWPwxDvmwU9Xp5rxzxVmagfBKx0PsCktC7iWI8=w1920-h888-s-no?authuser=0',
    ],
    // rentContract: "Здача за офіційним договором",
    description:
      "Металевий склад на першому поверсі з під'їздами для вантажних автомобілів.",
  },
  {
    type: 'Складські приміщення',
    link: 'https://lh3.googleusercontent.com/R3umHo0upQ76np72ykCYXSBUlnbYOBO4gFzmMGwG_l26uTR9PXSNwNe9tw0ZPjVdOWjEfX-rdd1JT2P9r2oStUqqbfwSveMmJXMnb4N_QhLI93CK5dalMRIz7w3OdCy0LF1o2pj83vv_0RDb_0G3SKdtBIcNMJRN2KxXl2_JPU76mXbAKsNKO34506YZvvodj73v3L9PN6CJK28RBkAcDKt3jSlAF6Fx9sP6VhmtIzxLDWL_mhfKaTG0vyamiV2WsmiYo1Wmdnfu-1YepPTf-7gzk1MBGfPQE6L5QnlzFodyCY_Ag7jJlGDsoM2ARfY_b15VViaicYGIKluyQsGDZHh5IW6zPdal4KRfmFqtjFIMMr56oSyQg8BZxwo3S45cNcdRYLorPxPHlb7j7FVoJ3jASg21imMw9U02TDTYwmd3LLNYsvyMP3RvSqsdBFDOOzky1-y-iaXOC-IC3K0gcycLHscteANBrrrLWtWzDvNLPDj4XWyvhbkLg7yEH7s-Tbzyzh56DodTzrS8qd_uJWiwqYjLp3J_Q3ig35Eacue7qmUL6H9ryWw1Wk--_VGIHzd-j0IuCWTuM0Cia-y5sN2hLbtb-3Yn9teS-WQZz6Vp9UTXgOxgRtVBMg8UZivEv_KF4LyC2vP_Qv2KBexo21m35EBaU3J__8ENorVB1xJ54IJ6orQ-gxipJIm0lgo_yyhm_kpUwGF7BVjmdsCNDoksy8GYmkz3o14z7RHOSWQkcQ_vqsHW0jvKvX5NBMe2XNt0Ozx7f0s4RaRtya46XYgY4I1ZpvsBlrb69Y9rSuiH5ns72o2CWRFOnENM4lD-R0AYp3LKVauA1KphOULsiimU_BR48XAk4A7hkFBwx3u3DuZioFxNXF6tl8gGL2Eaq17V4xu_fxY5UTppy-SFbcZFDY8c2Jt5s6lzpAlDQfVzSHi1=w1406-h937-s-no?authuser=0',
    m2: 100,
    location: "vokz",
    price: 3000,
    exactAddres: "Вулиця Леваневського 85, Біла Церква, 09100",
    keyFeatures:
      "2 поверх / Будівля спортовно-оздоровчого комплексу / Цілодобова охорона / Приміщення правильної форми / Прекрасний колектив / Електроенергія / Каналізація / Кондиціонер",
    id: 1,
    photos: [
      'https://lh3.googleusercontent.com/R3umHo0upQ76np72ykCYXSBUlnbYOBO4gFzmMGwG_l26uTR9PXSNwNe9tw0ZPjVdOWjEfX-rdd1JT2P9r2oStUqqbfwSveMmJXMnb4N_QhLI93CK5dalMRIz7w3OdCy0LF1o2pj83vv_0RDb_0G3SKdtBIcNMJRN2KxXl2_JPU76mXbAKsNKO34506YZvvodj73v3L9PN6CJK28RBkAcDKt3jSlAF6Fx9sP6VhmtIzxLDWL_mhfKaTG0vyamiV2WsmiYo1Wmdnfu-1YepPTf-7gzk1MBGfPQE6L5QnlzFodyCY_Ag7jJlGDsoM2ARfY_b15VViaicYGIKluyQsGDZHh5IW6zPdal4KRfmFqtjFIMMr56oSyQg8BZxwo3S45cNcdRYLorPxPHlb7j7FVoJ3jASg21imMw9U02TDTYwmd3LLNYsvyMP3RvSqsdBFDOOzky1-y-iaXOC-IC3K0gcycLHscteANBrrrLWtWzDvNLPDj4XWyvhbkLg7yEH7s-Tbzyzh56DodTzrS8qd_uJWiwqYjLp3J_Q3ig35Eacue7qmUL6H9ryWw1Wk--_VGIHzd-j0IuCWTuM0Cia-y5sN2hLbtb-3Yn9teS-WQZz6Vp9UTXgOxgRtVBMg8UZivEv_KF4LyC2vP_Qv2KBexo21m35EBaU3J__8ENorVB1xJ54IJ6orQ-gxipJIm0lgo_yyhm_kpUwGF7BVjmdsCNDoksy8GYmkz3o14z7RHOSWQkcQ_vqsHW0jvKvX5NBMe2XNt0Ozx7f0s4RaRtya46XYgY4I1ZpvsBlrb69Y9rSuiH5ns72o2CWRFOnENM4lD-R0AYp3LKVauA1KphOULsiimU_BR48XAk4A7hkFBwx3u3DuZioFxNXF6tl8gGL2Eaq17V4xu_fxY5UTppy-SFbcZFDY8c2Jt5s6lzpAlDQfVzSHi1=w1406-h937-s-no?authuser=0',
      'https://lh3.googleusercontent.com/tl8w_fRYdbH5uwyGMgUXrZImV2Y-HeFu5UpzjKxqh8ycaGk-_tlKsIlc022X0D5Av70i8938Vd6eBMCi6rOfjZ9AYvW6_lGugT5MrD-vR-q_il2FDN6b_mFQzaua_h_6oTE0VNdP9N7jnLMJBTI-ZhbdM4OhesrMd5C4lEi7NX2O8NmoXJnxyPYVXSKkdUmZjhd9ZViuKrTTIILOIfEqy1_w3mPE_Ye4w3xkSbuK3fwBMkOw8Te1yBvs467r_Td_wTzyqGx3IH28x1ihukzSJ9_Bp_TvJpBrs4FeK99Kl98VBGWqQmFxRIlAmUZoAh3RfZXPqrqw44CyEIM6-kaVbTQ-DcPjJHpb36uAmXddF7RFLuLxQQbVTAlO_myhVSipIpSmfcm0S-XJKuhskcdXl_VPc62OngBBrPpjO2XZUq33DNmm798OZzYlmYyD1Nrozlw_v8vM5sSw_70b1gIB8peZGlR9ygxf-lnFvQvczvJYh98KZo80NwgsVFh3z1xUlvkho0Lo8SbMT5M5-Jn1RHhE_IMjQ-_XrOXfZd5WM0WLzmdHZUmrdgbGvTlnkQ2yZrq98UFgHO4MTtww1lxOeX7NwUZJCzV-IfPopSVj6oqDmd_JNcU1VcUqLVfWs8etUQEqMSR36U7PalIueNtv8mCUBcviGE9JhPb0GlARA39BJ7wZL_qtAODQH7oLIicvM7JWlljT_XuadngfZW5VoX8IfaMr7dvPpIRUof14DizfSrktX_rz2bDj_vRpNdd_1RBbZ3i-JwKJlKgUoif0XztHVVXQVxeADXfPWLKBbcBGsOSS2OBWxf07HHTcUB9k2m4PFi7sVfCVNaI2wwYhaYG1ECjd-rSR5JkNkSADH41-rDPcVNMkLsTpc0ZzTFyUtd_t5dBfBvA8USRarIjYyJNFC2waafO28cR08mvMATwDP58i=w1406-h937-s-no?authuser=0',
      'https://lh3.googleusercontent.com/fife/APg5EOZhauN-Ow2yaVGpd9Zco3kxiXt2m34EQJYfimsjyYKaB3DMoHzNGHTZ-RwdqOXmSfWXAYfmbMx-3Axqd5DGYl2kVOZW30rdpZ24YIH42ici69iF38FfwYCozan3tYde9pCcx2dvU4BNldfsmFzQrayJnY_6fP0bYkkXPVTA58aD0XJcS4M2Ui7P40y0ZgWx18u-WgzfYWMDUFVt_zvDyteKTJxXr8uz3qgjxlkrCo-elM2Nh9RawAn2LqL2iD29FcbIToSvjNy7UcVYGjesn30RQYQzpPvUicpahqqxfkBplgZNSR-eNTFhubi2IENl0o0hznW4zO2fIfbnAWDCa68Dda0wLaLHDSQvvDF3HizJJuvlB5N65gB9GcyTvJ_N7geAvnFOQSUswYSWB8Yg_WzAM5qArx3T1xQNtGhPx-gepOsA706PKKQ9WaSRkStzAouJvh_RdbbBWoiNmACLXQ2dlPkIAOHQDvw-_vVvSheErd_WvyVKsWFBk1ovu2ryw05epRgvjFUAnBnc7ioJNwOQG3EjrdUA7wj79vrLZDhrh0yCzFp4i3QQPyfM5-rQogPJjKjlc6-fyAyvCeR1sMrE9lxA2S_m4c--fssdTKaG7bxMhy_Vhti03j0vgay50EBYYMiQ5Q1LrkWmWd9k9Y8_YHS7F-_23ThY5UyoKEfOXWWNI2GXK4fo1bA6JP-XnKirqP6s0Y-r5wo8CKeFvplpUia4lT9p7s9_XQbH08_A8lVcSAICoyDj349Xf7IFm33G8TWtpMwi4z_WqTmhy8cihhcYRt3VXFo1_atSz2wemx3FpIPSyd3w0hUTEibDXt-Yd_4aohSaAAqQuGqLN8-k9c4WB5hSzPK_LzXW0RojqiEFQJhvG9DaofjCpzbo6GbJ-POeLwQkS5R9lwcnAwAg6QJbWG1Obm4Y7M2z7TnidZ7ndV8FmJfSEslGtebHcSa7zp6Wz6VEr48fPHBqWMMfRXt-6HLkGDlMUdsjD37vdutCTWoewG_7TYPK5eil-0HFZjEAGWnRJHgNqntIwyuUKVZZl8vcH9s3aw7qrVZyC70UbUagKM0gIp1Ve8UvNB3IGdpmF0VWs4-byj_NirdhLy4Pq8XHdXrJihhlBeFw6GOBJ2jHK-KMplQ_fWmWRTQKEDgNUDoMV2aUFbotjX3smnUNSw0j9HU98jNe4TgCEzKQpF-zIrzA7N0GRIFEDCJ_qZqXKzJCR57NGlFaVlr6lTQSFxF4FlSopatasS9Y81Q6MWJc3ATqn-ByNejK9UB-8-H2rG25mrIrME9M_coFWA8oouDxVujsVVtZFSTiTyJ8sQB6hVUy7ljV9MnihKO63lFesDMV4CZV-DCMpSTIiOZsxaIRyhhdTnFQ9V3JXT1uj7F7nE-Wnc_KxEg9uU6h7QmHc_JQyDMulyUgPW6VJGHiLCAuKsBZdOkxVCcYzJRDLiZXBcJZiyBCC-WYf67rZlaVObPyIy2bOhZyQxFzkzqMpAFTRocfojo3MbiHakw5GfNX8oXu5MMzomhIDcldZ_P_fpibUxd66kfyLAVaOYM-Ty70IJKIzqp8gALQwcs_dQRNm5thSwbK-g5QUXWlxFXH2ArTRwJNd6r5UoJHFmNN-RIejVeY0MD87mp6ol0fvlVBL_u3MfDjT4wFdG7apxXv5JwTs0x5pnebfnYf7FncOU7MXHkeBeiexcbvicwVf0e0X-5WgWZVkixhPP5uOCYBTc6HxAvwQPtZaYUOGeZz7JcpouGlrCD0lKo7mar1wgaT85j4YMjbXTf5RfBkpFIYU-pF6k0PWjRBgcALssB9RUgSL-xd5aOgVXPPwsyei0TRnxJ9kjQqvyYkd-Q24FKFj7HFRIrwtGUcmwR3JiAP5_sfvmqiV4uzWXXQfU7kK9b-ebdSe8B5iMHHFCnkgLbLgUvKyi7Vdg=s1406-w1406-h937-s-no?authuser=0',
      'https://lh3.googleusercontent.com/SVa_qFK1Q5EJCqdUCUlkI1g96uHIVHNTNwZ2CKyBfjXJL8u6Uj4_y2JXl-xm19XA7wTtWPnPzf5-7Xk8XwKKyFXb150aHgS9J5S6VWMknPcxwawiFGU_7iUwHnliXgfj-NkUP9-1V0CSNt_a5clXdOfUZm2orebJ66a2yCaJMS5NFiuA38EuMOESt2xLjPiXlioukYAQbYoXj5FGIhHsO87_yPiWjl1qMDO2drZv2nhk83YQ5rbK53pVKy625zwKFRxcDoLliCIzInrrAUZolgPMgQ5zKobT9Oz8rj2i6bvIFNQurts80sj_vmefVUMNgRLEMH5gdAuUEz-e463g1KpuCPJ_GqzPFB2F-T-voyeCHPIxZWm95ymFXj86jal_g_rGVAHgYmWdpcIjOlLVxC0pZQItWEuBU4R3_7-V3YlukGIVCcZiuXhT2UUZXb4nowio8HWeFPc3w0ptzoZcT3QVBgLPJP9Cte67UYvO1tB2dmb_YWx9S9tnMAhy_hFQMu-G8yA3uEEb1Y_9nhkahcN7NiTChGXAIPwgIzUrRTXbDfPzwEQe5hRYAF7yCQVP_A0QsVQ-6aLi8aDY4uJXGNnW2sK_HpJXE16T6oI0Zmht8KToAAu3gUGTbRec-F1eOFf_APnnWXemtelHfcqKPFZuRwbF17C9uwavvkB2-7NjXMZt6pDEK2mlxh5KQPo6VBwUepZuddpY1p3JGEaxictUFcX5iDRWUZYYGXtagzk2eHiH0EqoGErMvjOfWFGdLYt1-sQGV1ba-PFRBzn7INCaVHZAjyQ7Z-anvri1zgk_hiBDe044bycudPWhDFeDFNntahhXQcGaCoYdqxoP2K29wokUHhs_n6cqr1OfEtlnQKWONQjLaTYoNDhhT4WzyzqqqFPi5QoZOgLofkBq9t4lXrwHuSinhwRYYQjYSHGlNuU6=w1406-h937-s-no?authuser=0',
      'https://lh3.googleusercontent.com/37TueoQpuVNdjJvRQMoRtg629wWFCXkox0hvI40peNvu-FrfzE0hOrEVy8Y-yQTwN5tKxoNsCfQN55rB-ZGcuQEbm0TPfZghw5KHW6Bc8r0FLQQWRON6FfSQyXBdkBFFAd4dkdnMFeiMFvoQtj1P6X4ZL8hg_ykcDIWtByMHZmUkT65fbfnmP28KpbuCkUBRaQL_gEgDsF_V7_erOn9YeQDCwY7QTIXwuAYx9BAg836mFFBjjG6JNMNM9mlIpy-Axgux2h9cLwLSUFLBeQB5Mxl2vnAp1rQ0o5xKqlviUOBFQerpeYCCAxxe43lWqM4228JRJOw9m993enDOj6jC_W0RdkWn9kxbm5x47VZX0pHiQyiyCWYUSkMN7UdzLoC0ZigQCB4S275LruU2kxUmMqLfl1iyC08yAuie-HOaEEiJsoo_WKLW9tk_9K8NnwHmSrFVbDRylQH8OOYyH9VphMlGy8c0b-EuyDsZjk1aquVL_iJvpZVrbf3H8GW4HbDyEI1q88_29PP3dIs2Ubl4Lhfc-pvwL4sQ4YNrLCUTclq5Fcdg3TPeco5cyFIroUPNg_sY3OoWyBRSnyzxU-c3FpPiw4Qi3G0G1bzKJ0vDyHRtTQNxW3nrM6tmDHMyW2i1WuLpnwatkMgEOH_4lPSjVE467Ig9T_WpmlAhtPYxOaizVDZquGTfGOeGVvHFlJkFw4MTXeq0n-vaJCEExTNQGDc0LtCNspnoW6U8_X0r2_XJOb70nLONys7vIR8uTLUefNa3nbx0sbxz1sPPBzXZ7UAS_bfFOMyHXoTHkenu8dsBkuLXONGTrmhBplGrpPAlGaLarx0jGsE62-B5tMWRmR83qiFreyhu7lKU1G-02TJzZF76aVVlg-NOb38S8SNozPGHHPiqt7MULy0WNE2rTH9J1EwgOxTcIsQhHM5dtfi8ASZL=w1406-h937-s-no?authuser=0'
    ],
    description: "Будівля оздоровчого комплексу в центрі міста",
  },
  {
    type: 'Бокси',
    link: "https://lh3.googleusercontent.com/S5ZEvtfGT2VwpqhITSXIzT7TB-iTvuLa1yosmthNoKE83_7sEfT216LgKxxnw1_6FjJYGOf2cAQ8mUrfB7n48cHUMbSE9iyOaQzIBfqkVfSB6LSk-UScbdnZhGZp7U1KKc6_ZoVQx1Oq4LOr4M0QeOWxuU3CiPQnGCUj2uA36kzMH0N2DanvuDxip30zLsSeAJZ_l4Vw2taF1TCK8h8e9LEhqgdK8z8MBJaaso8bcsbDvuoIteDxByePS9XCFg_LSqemk6xFR-EvCkfTed9l8zAlnnkcwxjdIV8RMVUkakbe0yDRDRxWRXT5t_iLeVhN6CN0dL5MSD-3nWgI6Nkd4P8NoivfH2RQ7SrIoLq4rbdMM_8IrqmedV3SYAzgSTB6Z8mgnhqGl6d_OziQUtQH7m69bqnDvOsjNdbegZc0ri0ZA7JWWZ4mTk_E7EpgZtEoqC837yJigMbVJT0yhK6AtU6WVTo8LF6sMrqjbNaQ23NihzbuQngANgkfGvDAvJMABnF0e-vOCtty6suj6UtNQjThSIo2MKMTp8SydD3SxKVevERf_DH5llFaCLwA39Yc-9LKAN0cGl8I4rwmQlcX-QxlCrVQ982yfHEpXG1tOOtCKEUucXnCgTYSAgE1VuJiawzXJdFeqETBSVka190pXSjW_QiRHPmbKb_kvde2cSf98AyT3UyB7tqRLOkt-JN_wQ022WKWomu_gRCDH5z7ZzKb5ppTv2FXmNlRKhrwYE8BfGS00AU9YstbD--yZpNNA7GS8cUkQh0fbeqVQsgFhXOHpXv0bC0fXQmSR6PuXAKXmaclvs15I3eyRp7OdRWoMp3QzMkAhRBdorrTxEBYczihTBbzSSmpV0Z6atIBTfYSn4ZHHboMyKLDQ3oZ8No6mfs5rKfwAUEU4LfUyN28OIQQcG0R_oRAsod3dKq7AETh4LqF=w1234-h895-s-no?authuser=0",
    m2: 200,
    location: "levan",
    price: 7000,
    exactAddres: "Вулиця Леваневського 85, Біла Церква, 09100",
    keyFeatures:
      "Закрита територія / Рампа / Приміщення різних розмірів / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація",
    id: 2,
    photos: [
      "https://lh3.googleusercontent.com/S5ZEvtfGT2VwpqhITSXIzT7TB-iTvuLa1yosmthNoKE83_7sEfT216LgKxxnw1_6FjJYGOf2cAQ8mUrfB7n48cHUMbSE9iyOaQzIBfqkVfSB6LSk-UScbdnZhGZp7U1KKc6_ZoVQx1Oq4LOr4M0QeOWxuU3CiPQnGCUj2uA36kzMH0N2DanvuDxip30zLsSeAJZ_l4Vw2taF1TCK8h8e9LEhqgdK8z8MBJaaso8bcsbDvuoIteDxByePS9XCFg_LSqemk6xFR-EvCkfTed9l8zAlnnkcwxjdIV8RMVUkakbe0yDRDRxWRXT5t_iLeVhN6CN0dL5MSD-3nWgI6Nkd4P8NoivfH2RQ7SrIoLq4rbdMM_8IrqmedV3SYAzgSTB6Z8mgnhqGl6d_OziQUtQH7m69bqnDvOsjNdbegZc0ri0ZA7JWWZ4mTk_E7EpgZtEoqC837yJigMbVJT0yhK6AtU6WVTo8LF6sMrqjbNaQ23NihzbuQngANgkfGvDAvJMABnF0e-vOCtty6suj6UtNQjThSIo2MKMTp8SydD3SxKVevERf_DH5llFaCLwA39Yc-9LKAN0cGl8I4rwmQlcX-QxlCrVQ982yfHEpXG1tOOtCKEUucXnCgTYSAgE1VuJiawzXJdFeqETBSVka190pXSjW_QiRHPmbKb_kvde2cSf98AyT3UyB7tqRLOkt-JN_wQ022WKWomu_gRCDH5z7ZzKb5ppTv2FXmNlRKhrwYE8BfGS00AU9YstbD--yZpNNA7GS8cUkQh0fbeqVQsgFhXOHpXv0bC0fXQmSR6PuXAKXmaclvs15I3eyRp7OdRWoMp3QzMkAhRBdorrTxEBYczihTBbzSSmpV0Z6atIBTfYSn4ZHHboMyKLDQ3oZ8No6mfs5rKfwAUEU4LfUyN28OIQQcG0R_oRAsod3dKq7AETh4LqF=w1234-h895-s-no?authuser=0",
      "https://lh3.googleusercontent.com/o85ioaNLRlUTJp7hFa1sxxyvqQRm74o_AN-X-Fey_oGuwDFfpBYtlVbd7YcoktxPPAyraEArteemhU_2ncSkbxjkiadIii8paPK7JRyobTyzGxUqvvhVEBcTTARD5mTujbtFIr9cdLVabeUA4xMc1RDxvJSm8QyNDk1j4K-s4iGLuwD2jhmEl_ii_-ZxpmJ4KDftIQCWRymrzuZOdohD8V6eaIwXFPjY_tTK8c74x2Woq4OkOUHUOvKUu2BFJRjNGJvghKrg3LJxKISm24bgmbB5QWk9-TpUuQLmkdeACdEXuI7V87NE7DEZvwoAdMB_EyVCqQjfOwYkZ_FZFYIrQ-VD6PSaPtBVd7YTINt1YeTwEOeOwuK0XrQVelP1OtrlBTdGBVW1sDg5gD-AuMb6Vrc3Havyqm0W_tssbBys7VZj2x4Q47oPcIxQltdQpqCw-QL20MaWlMcoxw52YmORKMadZd-SaVDEA4df5pXB1BlXSU9cN-Y5xDD0Bdo7Zv40Yle-YBM3pXTpmbB991uhAT99qVMgt6A5ozF8GK9LvCUKAfIQI576_ogjcYpfPRIkv-vPJUtYdTE89EWCgp-Sokdp9ueaQu7ZpgoRpvt3R-sDv3iE8AQBrfLcYjGuKmFHC3-UUphPRbSgXkC3p239WWri2J-QDfYnHwrrbQDOMk8px0K-2ZGf_-3yWjJDsA0pHDg3I1MZd3t7h4CUojO846TMMPrUcMeSvbgCZ_DevY77EsF_WLwh49CmC62G7Rsw7X7JgnLjO8eSJNSEC6ykSB2FpedhQyO7h1dW8F2h7cf7gt1pI0O9hdH7qvosLBFxVm8LUe4ZZvklFKab13Xoz7YxZv9Dh5iHzUAta6STNLRMaHgpSddJoZvcnOwws51z38sVoacv1jUivjBULXRdcLkZvAqF-nTm1IHZqyfc23knd5KQ=w1251-h937-s-no?authuser=0",
      "https://lh3.googleusercontent.com/J3iZUx1e0nr6bD35zw1S6gpFnjoslvSp1Fwf9np_nbbuavvMLtVcFnf_x7Td--9UtA9RsRILqwzLZFoJlUrq7n96zyl2ZfU00FPVDLsh9ciwvjg070QclM4AA541WLAm7CA-n190JAAlFMb7J5E1bjniJTupmRtA4tEUauR8wB32VCHzlhwp-LKDJNi-1tAI01vYCHWjcBTsscygyWrg7Bq8ydhUsJ6RbUmKthn32E6iy27iZXnFV48Ru5qd3VRX2-_V9jrdO6QDZq8nydE6yOYTzo2X40owJ-81A783IdCN-sl3ToNjHKQcRbzIkoenRB6QJDYFjHaSMd0WexPZfyIbZtrwLNYjxp9GygyDEEKM6vPo8XeIrEzC-RrMj6yNoEOKXFiKl-B-Ae2ey8_vEfkGPuZfaCucLkKCjoHPC9YKIL_QBV8h2vZSQWlx_D9iv10yQWm9oBQ0RvG6YYXJ7I2nP9QIcT41kmj9dwT1FZhzbuJDiCG1LV6jfX8XKVEiBijsxsH9mR9Vpqw_YEb_HrriMiksIvNJigX5oRJ64OwXPcWh45up6zBayjH_26R9xJ6N6u3O5vEgY2ov5VaZbvqwczVxGDDmqf7I-2mRwGE58jDrXUoI1k1WfyQidAlgMppDBveBpxafmt8sA9DoH2N_X423zMIERmKM4FXX9o3k7YOgeVU3wJN8ZrOJmrs0uxL2jY9AQIUCbsdM6ouGHrOczv_yd10QEsM4zJLhDN0gwctRMJ-hS4unhA-5om5VYGDHVzkZQxECAQJk9QUfDxH3G-7OfaIOq_dNga-Hm2jOEYgUT2a_wqa5lTu0lYOizEA4C_vK3RnapMoU6uEVgGwiSnBqExA-puHFsEUuSDONwO76u7dplq4_UKyfu_CDVN1mHG4yEcqpi_nXTLf6XUI9pvNQg2LCpdzvl5SEMD0LdEnd=w1251-h937-s-no?authuser=0",
      "https://lh3.googleusercontent.com/C2KccJsE08yZpxjCdlGlzwl_FhhEX8aIare8lLZ_bNovRFzdI32-GrcCt1AR5GWZ_DkxpOmdzPTqUXp7eFb2bWl2JRp4HWea9wTnTosqI3FngBVbAqzJAcxs8GRe9WRrAnTVmfEiAM6nlJzPokyAgwMHV0t_8-XFe_kvOIYCe-Ybpl7FO_AiE5Fjdy08J6JohMo8mox9zI6e5PHbpkWNYib4t6eSUcbQTYsXjGVwx2xttUtV2tZmCVV9XrnVJFzDr4rjXeTaQ0AZ0IzKgk7C3go7H_7iuAK_6Jgmgm__uV01uaN5W6eTfMhtwbua6rsAx_k1p9LD1M7XfhLuWdGdCtIv3qedFCyGskDRoQqk1383s9V514-A8iWAuXJXONHgNO6opq7i-g211D4IjDz7anz499h4DIp6g1aTuw8EUhYojNJyMbdwcx4_FgUWbvh6VPpx8TfYFCDPLbilT3ApFpaacc9aNVIgZU0AVnfRCWJe9OwX0HrxyWxrnQ8AtixmaalC3OQBskbHBKzp2V2qKhxB5YsNtfKr71omi60g776XCj8wN07yx0EQkhwGXCR36Zy5cili0X2tdHjrCu4iEiAaz62OCz-sm0l9x67RLCgOObStsEPAd20sW7TOsdnsDmYjeMitGUBKYbOqtEG3d8ef73eAeU_pKEaBpfWrh372D1EwwqkcMInKkqCDiJrNc7FlzycynGA9lh6pbU49MuwEz9puPuGiC69KnjUbOQuMQ07G8EQJOWfuVdkS-CpOsnzqvT3ARJtUDhSygDFVf0c8c49AKyqbIwZ1XJ5vLCWsiVBt37QojrAsMWT-EaiM5NlQTu43Eow4lsj2NXnHSgYotiNMje-J2uOqyYB74rIhhHQxo32HFlrzfZhg05rlT5USs1bVISnodmUDZiJkk9_N-GBBz_gZg5vrxEzsl3ni71VO=w702-h937-s-no?authuser=0",
    ],
    description:
      "Функціонуюче овочесховище 500 метрів від Одеської траси, з рапмою та холодильними приміщеннями.",
  },
];

export default function ObjectDetailsPage() {
  const router = useRouter();
  const [photoIndexInArray, setPhotoIndexInArray] = useState(0);

  const {
    query: { id: thisObjectIdInDB },
  } = router;

  const thisObjectsPhotosArray =
    rentObjectsFromDB[thisObjectIdInDB]?.photos || [];

  // const { exactAddres, m2, type, rentContract, description, keyFeatures } =
  const { exactAddres, m2, type, description, keyFeatures } =
    rentObjectsFromDB[thisObjectIdInDB] || {};

  const keyFeaturesArr = keyFeatures?.split("/").slice(0, 6);

  const rightArrowHandler = () => {
    setPhotoIndexInArray((state) => {
      if (state === thisObjectsPhotosArray.length - 1) {
        return 0;
      }
      return (state += 1);
    });
  };

  const leftArrowHandler = () => {
    setPhotoIndexInArray((state) => {
      if (state === 0) {
        return thisObjectsPhotosArray.length - 1;
      }
      return (state -= 1);
    });
  };

  return (
    <>
      <section className={style.sectionMainContainer}>
        <Galery photosArray={thisObjectsPhotosArray} />
        <div className={style.imagesAndModalElementsContainer}>
          <div className={style.allImagesContainer}>
            {rentObjectsFromDB[thisObjectIdInDB]?.photos.map(
              (photo, photoIndex) => {
                return (
                  <div
                    key={photo}
                    className={`${style.imageContainer} ${
                      photoIndexInArray === photoIndex
                        ? style.relative
                        : style.absolute
                    }`}
                  >
                    <Image
                      src={photo}
                      alt="work"
                      style={{ objectFit: "cover" }}
                      fill
                      sizes="(min-width: 1024px and max-width: 1339px) 100vw,  1340px"
                    />
                  </div>
                );
              }
            )}
          </div>
          <button className={style.arrowLeft} onClick={leftArrowHandler}>
            <FontAwesomeIcon icon={faChevronLeft} className={style.xIcon} />
          </button>
          <button className={style.arrowRight} onClick={rightArrowHandler}>
            <FontAwesomeIcon icon={faChevronRight} className={style.xIcon} />
          </button>
        </div>
        <div className={style.allText}>
          <h2>{exactAddres}</h2>
          <hr className={style.firstLine} />
          <div className={style.squareMettersBlock}>
            <p>
              <span className={style.smallHead}>Наявна квадратура</span>
              <FontAwesomeIcon
                icon={faVectorSquare}
                className={style.textIcon}
              />
              {m2} метрів<sup>2</sup>
            </p>
            <p>
              <span className={style.smallHead}>Тип приміщення</span>
              {type === 'Офіси' && <Office color="#7ed957" className={style.officeSvg} />}
              {type === 'Бокси' && <Box color="#7ed957" className={style.officeSvg} />}
              {type === 'Холодильні приміщення' && <Fridge color="#7ed957" className={style.officeSvg} />}
              {type === 'Складські приміщення' && <Warehouse color="#7ed957" className={style.officeSvg} />}
              {type}
            </p>
          </div>
          <hr className={style.secondLine} />
          <p>
            <span className={style.bigHead}>Умови оренди</span>
          </p>
          <p>
            Здача за <b>офіційним договором</b>
          </p>
          <hr className={style.thirdLine} />
          <p className={style.bigHead}>Ключові моменти</p>
          <ul>
            {keyFeaturesArr?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <hr className={style.forthLine} />
          <p className={style.bigHead}>Опис</p>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}
