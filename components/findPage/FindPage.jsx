import { useSelector } from 'react-redux';

import { useRouter } from 'next/router';

import { useState, useRef, useEffect } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ObjectCard from './objectCard/ObjectCard';

import PageBlur from '../wholePageBlur/PageBlur';
import ModalMeinMenu from '../modalMainMenu/ModalMainMenu';
import ModalPhone from '../modalPhone/ModalPhone';

import ArrowDown from '../mainPage/main/vectors/arrowDown/ArrowDown';
import ArrowUp from '../mainPage/main/vectors/arrowUp/ArrowUp';

import style from './FindPage.module.scss';

const rentObjectsFromDB = [
  {
    type: 'Офіси',
    link: 'https://lh3.googleusercontent.com/ghLkgG4Bwp_KTqbTbhpbYlcBhOEUWNDaDPJS-nSgy41NL0y68w5hjD2U3IjZJWbeP8b9kpQf8eMT8qXFwixTBZsQgeXLXGuMBGTj9XM7Q0haWaZ_NeLIbqwLWgyRkNcbsgFCgfna4rlrbVK23OexSKPD5czc_DBaCYwmE6PtbCLvZtcT-2wThI6XqLPPI9QDbPDWBGttRmlhHzkKrbzJRpQG1JwjdGv0iDpVfjEDqRrR9v9nmXRsUthW5mzg1Aqge_A8uU3lw8ywnoNogj7f8tfgsnNq_VZIK6-lmqWnRkLPBgYvbJUUyEQuHNxx0TbjFvYg4Qj5daPidgushFBzxZtq7aULstXQXxL5wFdcvCGTqc8-StQX27Te-4tzpKp57L7iCbO46DslzfR_C-AIQFGOhDWDdap-NNZPJ49DJQNL4Dpmo0Cq3Jy97Rw1yJ13MPRqpR203zlTnm4b79b3z62fl4V83-MgT45xJ5sBMwMkebrgRXOUmrK3wBpIRgSsVN1Owc4PKYzMj_w-cYcgZUZdiiWeUaizc5JajCvp5-LQJTX2GLfNyKhwj9-ldjg28LXLQRB95HXKsrl-PyP7A7koGnFM0dWXw_mh2muNYoq4bB7IvuN8MolQHkOueUk19Qn_0gg3jjsmtPOlCsMcTxbew8U5RCmsMim0iU_a2zKb8h-kX5foHCbVpu0h1E8GOkL9Z6rYr03BKdWsAHrY0LaDseIeKxBFjbhX90lW3SXgLUIsW7rCQJQKcEImHcoBsCZeBDwYAJHJ26YbxJTTM6_jLB-ieqpOIb6aH0kqwj4B0fE7xtRxWmFQkhGKMK5yvS5wRqR45bf04Nb2MU9WpNPlMTL_mlSuYX43nS4S3PeJpGmDa6hkXoPf863AmJ_PiCcGxeEDLIZxDl92GxdDxMCExVWozZMqpRb4C54W75Wq1wsJvnUWk4ys-QuQrb5aOQ3n5T-GWwjoliuuLaY3y_DJ2BGKSnW5qqyz6Z4hWcHVwNxlUjcxC-ZYBQmKUyk7RAJW1QNB3Viq5eA6PSzGtRGULmz4KMUnnO51gpQNkDAqmbeGVtuOc5sw_rb7PtARzZTzd-8XG0JA8g3XMJRZDzmeOsyrHWr4LEUoot1JSD9ZgtNXC3j-MeV_WpCax5laYesMrYO3YImp2ADGu8sbIXN-mZwxo9HUtMYexym4aA=w1920-h865-s-no?authuser=0',
    m2: 20,
    location: 'pion',
    price: 1000,
    exactAddres: 'Вулиця Січневий Прорив 38А, Біла Церква, 09100',
    photos: [
      'https://lh3.googleusercontent.com/ghLkgG4Bwp_KTqbTbhpbYlcBhOEUWNDaDPJS-nSgy41NL0y68w5hjD2U3IjZJWbeP8b9kpQf8eMT8qXFwixTBZsQgeXLXGuMBGTj9XM7Q0haWaZ_NeLIbqwLWgyRkNcbsgFCgfna4rlrbVK23OexSKPD5czc_DBaCYwmE6PtbCLvZtcT-2wThI6XqLPPI9QDbPDWBGttRmlhHzkKrbzJRpQG1JwjdGv0iDpVfjEDqRrR9v9nmXRsUthW5mzg1Aqge_A8uU3lw8ywnoNogj7f8tfgsnNq_VZIK6-lmqWnRkLPBgYvbJUUyEQuHNxx0TbjFvYg4Qj5daPidgushFBzxZtq7aULstXQXxL5wFdcvCGTqc8-StQX27Te-4tzpKp57L7iCbO46DslzfR_C-AIQFGOhDWDdap-NNZPJ49DJQNL4Dpmo0Cq3Jy97Rw1yJ13MPRqpR203zlTnm4b79b3z62fl4V83-MgT45xJ5sBMwMkebrgRXOUmrK3wBpIRgSsVN1Owc4PKYzMj_w-cYcgZUZdiiWeUaizc5JajCvp5-LQJTX2GLfNyKhwj9-ldjg28LXLQRB95HXKsrl-PyP7A7koGnFM0dWXw_mh2muNYoq4bB7IvuN8MolQHkOueUk19Qn_0gg3jjsmtPOlCsMcTxbew8U5RCmsMim0iU_a2zKb8h-kX5foHCbVpu0h1E8GOkL9Z6rYr03BKdWsAHrY0LaDseIeKxBFjbhX90lW3SXgLUIsW7rCQJQKcEImHcoBsCZeBDwYAJHJ26YbxJTTM6_jLB-ieqpOIb6aH0kqwj4B0fE7xtRxWmFQkhGKMK5yvS5wRqR45bf04Nb2MU9WpNPlMTL_mlSuYX43nS4S3PeJpGmDa6hkXoPf863AmJ_PiCcGxeEDLIZxDl92GxdDxMCExVWozZMqpRb4C54W75Wq1wsJvnUWk4ys-QuQrb5aOQ3n5T-GWwjoliuuLaY3y_DJ2BGKSnW5qqyz6Z4hWcHVwNxlUjcxC-ZYBQmKUyk7RAJW1QNB3Viq5eA6PSzGtRGULmz4KMUnnO51gpQNkDAqmbeGVtuOc5sw_rb7PtARzZTzd-8XG0JA8g3XMJRZDzmeOsyrHWr4LEUoot1JSD9ZgtNXC3j-MeV_WpCax5laYesMrYO3YImp2ADGu8sbIXN-mZwxo9HUtMYexym4aA=w1920-h865-s-no?authuser=0',
      'https://lh3.googleusercontent.com/iM5C-YxG_fQAXEcnFinbid5_BVTZgoyEiTu0xIu5kr_mYjssemErdaZeRqwT8a6E96y6cj-SJd7h9H-SQrUFj-BCBG7pl0uvPomjOycGajwa7kwT4HWS91gwVOYsLRNqrkr1YAeuZy4hdJ5hvb5Jsa1TsFSNzvga6VOwrPkdsUq4dbBAhJfWx6teLfKze6joyVwy2eFl0FiMxJPCnvhkPLSKTuVS5ogKCqvB0fMDurxtHneHh7YuDuYRy865dwY6xOdF_ouz3tjUQuaP_bK7xrCL54MGEuiV50Dy2Y9TCzDxbVVLHFJGM_wmUdk7ma7X6xmT37svthTtc2EoOMHCgUY_pxm5l9g2nkXt-l_o_Y0HXqa3Rf4A2jcEXUw-ruITK0Yyp0QSehcM2D7mO3CQYLUHQJmEXoQ1Q6MYiLDMmPi0wV0eRs4KbNwneki9z3jRHs3nCvXnV1EqIkOpXJ7G9bdv2Ubh-79PnOj-vwlTENOitLTZOxyQnoKtk7m9ZnREHbOZG5SNsQGfz_g7BUbBXhHq6PkE3ZniOJNwiWU2mZi46qd1mrinEFvufpw9MezvyYSK8XvrVSkyf6ubJo--OuOONT0GdJkyHsDacgrm8WPL6dcxDmNkwRGoekVp7wI01262_zVOeABcic9iYTvvjD2ZYr3NWJYpvq8viVOklactpX0suFaR1X2ESdY_iWHPda6KGHK4KWqrbY0xb9hyA2WBArzvGGTyfiJ9BQvNQmL9jyheoGrVQc0dqQ-ckXGget_hNOMmN4BSLuVjbjtYizR4AKbpus1-VvfHpbcYjDR1Uo0RbkbxylRR9feXSzaBvvBdYTnncHd7payP3QWiF-LOaSRttxJ0BLbjaP0AvsJ_t7q23fqkb80ljxdVYe-DTD3XMkuaPL7z9hv4xyw2g96L1iyd79dryXtmWGyCd_mh-8MnKoxDWJmDQ95kztbOCXNdCMquaSA3yx2GVpuzkiy3_p_JOLtyjfbEvj9o4tiOD7RvGEvwA2Br9bUeX1XdWWIFLr9ayW5_owIk2ydPHyE-WXjlUwQEp-2hwUHq-rpE1Bbh2ECdE3jY70Ctyfl3Zmf3GGlHACxVSqsLdbOXX2AWjsf1S-oAaEfzSrZiT0ChE1_mKB9BbzABiEBUzAaLztJu7q0gRsrHisbwhlFFFF11Zzr8SG7kEFaGYXCbkQ=w1920-h803-s-no?authuser=0',
      'https://lh3.googleusercontent.com/dgc6nNpxhuncaYDDapCpybaRNo0b215foNeLUPZ-5G_Qvp7Dv_5kpdyVJiq6hE1HfT5lOuHxEzb4ESqZ_el5Yo2Nuc9EpLItogdY19OwHgyC2w6AgpN0-_W6Bk7WSD_wXGIuscwA7Sd1Y8ZQ2KzHV5lO6DxibfY8J93NDwasd1saJywslRZy0dbnPh6XEbE9Ml0MdFJYgNl7A15KQiDYkIMZDxYDO6yPJ8lGHqb2cTyF0yQiQAU0yaNkGHEmPxtAkLJ-OaHWTA-Wb0aBzJg1AnJ3vkcDU-tjALFImhNm5wKxe3q7XWcDPDJ2mrKlLZY-6r5N-mrXg0HM1llacO3WmOvlL_5NHSIx1XwgiOWC18EuNv0EPvArIxj6BBaexp47rg-emF8_oSRww6k8TvZNDsf9CI1rQkZaSgx_RM8oUnVRd0b7rYWUtV6duUvn-Bc-a1qU7ufKsKGc4MwycVR21t642dkwCgoLiHKCoD_mqtVPmZ3tvqWfyoch4qzYeXnjvna2fAQsLvHQt_lBoZppwPtmTzl7zeYDEYtUu8eYpqOGm4ZA8fWMpU17CqN1g8LN1o-qzw2_6R8alErqq6tu3FHrFB1HLdwunwA5a9x3IDRTp7pKEOehtcEJ2AbxS6ykKr_m1uHMO4b8uCxqQorHalb3XxnUplt_WKItIiBLe2LNZyFs_cOElZX954vLTEsDAG5-6gLRySAZuzePy4hOYjFM71BXT8oMVQBGQfVLy8bW_hDwZRb08Qwd4Aw_vNUWiK0aXyq9jZ5uhbbsW_SH8Iun7Xy2O50rySDapt5o2x-Y-Ld70o9JYZ5-NNrmjU8bwtyVIqd731xO3ZruleHnOOPWAJgmq_RBRKlCOIUwhK2bcNu5eLNa3xBfBmoqcddOEFj-_FhWRwt3bGVQBGbp2GXakIDwtt7j-d24fyXnfAPH5SBjfJmFxoMoWSyCHI_RjSq_tymde3ygjGDt8AcBqwz9YOZAvSLWY1UGiZd1ZaWukcrmz8Q3yBXYYyTCsxKQi8lUlucsYH67EsALnA7zGACYQ8htu_n7EXo0bDM6Dh-0Asgam9a5BXqNjl71WtzBh9dAII8hvbWcr9nd3u5FvjFSVGavIC3Ei764GGhDhQdJ3XgaoGDScS3e3o8NpH0EW2Nvn-BCCU1Z8oF0gKXUaymMpuhJBolwAxenBrSSQg=w1920-h885-s-no?authuser=0',
      'https://lh3.googleusercontent.com/lTXVjjOiSNx5yKQzl6Z-CtfMYjgD0xCT-hRg6wk70dUsJjQjKcpNQiQhjcxsoqHe8Aip2veu1dvat2GRibA0jEnp1-1X2dIVjJc6BuNTTCc62-I8D32gYWWeWOiLXVtzoRfSWw129r53kNDAIY7CIJXluWsANKELea09QzUDzh0N87TxPIq1cc17s2BjZrOaJ-k4nCPs3amKsUZI6Mhyksc2dbC9vTCW2iPX0fwR1Y72MuB2cvBMdsDazSJMTUVAP_TiBP-3ulFfb-TzITcsf4M3TwidGTU3VI_HN5U52QcJYDpSulV1P7N6TR2PjWFFUYc_4eA4ZmfUBO328k-MJgcnQYpVx4Cr_TDrtpOa3-prMBNf_Ohj4sIxlPWRdrLJLszs5v0o38GYetvV5NfFXvcl65aJ5SbMVFzlxapFCPh-2gdt0RpiDHuocB9KzCvjs_WIPu6N9mHdm629ns25SzsRGBvT_l_bocKPA8XmSctM_idPiOEtojny60rPQLlvrw-icCCbUob9vdX2iB9vVIMZqnxFx-bI44gWPUOohwoX9KqMaGGptcWT6v5mGbfHjb3TvZ0qU_DukBmrQth6IafC84qijzR1Y8X0TE20rnvl53BB9fioBqPRDg_6jqEAOm9m_b4beWO5K_EzxeQzD7vQbS-tewM7E5YeCcWZsQkvsq8Oj9PCi-3tA1B0F5XlI79yxVtJc7YeBXw7Jz1GIJ_H9x-0GgWc6TUvu4ZBLmUWy7Dv5mc34Ba73SMGzNUCkMNSIuT1L-4aNfvFGhzQCfrIjj0RxHzohHjEcOUZzNOtKC76yqfp6P_DN3ob90uhbtt2oc_GcTmy_eg_1qCmddysdYGTvUFuAJlRef5cM1ghjDRjXyX-o_Kx451wfpTzm5G1UQ_ucM1RFHenibDyqoGPV7teKsr-FRd_YxJnnZVH8spmi-fw0OABOrpBItn0vDwM0bow314LMw4tqJAa_pzy52LCllK-vsaoZkOpGBovjmu6gU042rauVrcdm8MkI8Ch7So8cj17k_LDFay8wOR3XOIJU9Ku3_HTB_TV-MuKNGVoJ9Wb9xB4OxR2NIGFGWe6tzQvRup2lNl4Gh3ybRypG_8o5Srq30zKr8ihNCMEisfS4sGyIcxF-AnhVgsZpCFVhHXOqp7eEM4VDBXH26XkpkOWcpgdlV4_Uq-1AQ=w1920-h888-s-no?authuser=0',
    ],
    keyFeatures:
      'Приємний ремонт / Закрита територія / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація / Кондиціонер',
    id: 0,
  },
  {
    type: 'Складські приміщення',
    link: 'https://lh3.googleusercontent.com/5dOofMJRNkP4csRIIWO16KDUZ5oJ_fNyJ77CP4nxK-YMljCqtaCxLsBuvjPuzt-NytVn7jwUHMd2XZIq3O0erAP0CFttvHz-Kn3zfO5o2MGodaTkw5wbDTWHybxsYeYKIx6TlcM1MihT-FpWJ9gu948mM87nEw1T_4-fzWtZFhh_NWjgXerjJ1GbqA4cgadJ1hTua9qh3Oik9KBecQsiFpGWpPwAeDs0X9YZTPP138sjkvkx-aftkkvNMzdW7c87MEW0rhMDfo7sTRVuji8LDSnqOugaM9QuJELsykUikQaQZ7zHVHMxo7H3QhZdHCqZ_NBrgXfZ3zXNWSDO4KCC479tBfotYsm7VtE9ko9L0NpyTVFi6yBiyBY6a0oDa01icbLqIBpVLG7w8VWzlgCqLvOinDK0j_Twr4lcLzCTYp41-jw-ERXVmrd4bSrS8P7UNNilwdMh_tM9pzjTKh9N_dHHJUb0wDNqhrVz-xRvOca_SYQOZN2bbc7RYqSR_XkkoBgqreXjDV6BWV4wcKic8xTqJQsLr11gPhXdsYSNZ4WyqBgLw_YVNxCNlzWGCha_jMocXjcFQlgWeyKxr_t_OZu1_PSmQCcf7BDzd0WNkpm_WMobUUDptfmMZTsLYY5HYfJ8oOkjcLjp3fZHSJodbo7Atz5uUxfEinHWDNgwiMQiWJplX32T7OXzUKYT59oec1TNwb0LmtIeEcX-dnK1S1gUcIN_a45CjGKzRf8sXkdASo26mptH4MUVs5QRpZsMQyQq0vI2xT6ifHgiAWK66LQTzV3krJCZ3QcFeoFYRL0Z-6laBf0ch8enR5ZK4uy180rXKQdHCfBFDNPmD-kRaHtShnKXtL-MnSDTfVR6PooLLoM8ApDhWwFqTW82nT4IbyjeISPtnFV8p_SmyP-dbZtpSE89IqcAtnx2sF9cHKzGMZTtfTP30lMs3c-RBrS8hMxP10QI8C5gKljwgdAPKccV_QojGzLelJGW8ZeYcBi9vNdLJKYs-U-rKgqjtV53JLNRIalqXk0ROHhirzK305yM70psAvOwLh3fvndyXJwQz3njafUp9PwqAGeQ3wgVPI6zKV-QVoDozPavG-icIEUE33ppjiMqf_g0hMYlOZ3TzZVkKA5tUkYPHNpjPult10y_Mm7nMc2aHIrpnYeT_vy5JIuXfPOHOW0aA0dv9Q=w1354-h903-s-no?authuser=0',
    m2: 100,
    location: 'vokz',
    price: 3000,
    exactAddres: 'Вулиця Леваневського 85, Біла Церква, 09100',
    keyFeatures:
      '2 поверх / Будівля спортовно-оздоровчого комплексу / Цілодобова охорона / Приміщення правильної форми / Прекрасний колектив / Електроенергія / Каналізація / Кондиціонер',
    photos: [
      'https://lh3.googleusercontent.com/5dOofMJRNkP4csRIIWO16KDUZ5oJ_fNyJ77CP4nxK-YMljCqtaCxLsBuvjPuzt-NytVn7jwUHMd2XZIq3O0erAP0CFttvHz-Kn3zfO5o2MGodaTkw5wbDTWHybxsYeYKIx6TlcM1MihT-FpWJ9gu948mM87nEw1T_4-fzWtZFhh_NWjgXerjJ1GbqA4cgadJ1hTua9qh3Oik9KBecQsiFpGWpPwAeDs0X9YZTPP138sjkvkx-aftkkvNMzdW7c87MEW0rhMDfo7sTRVuji8LDSnqOugaM9QuJELsykUikQaQZ7zHVHMxo7H3QhZdHCqZ_NBrgXfZ3zXNWSDO4KCC479tBfotYsm7VtE9ko9L0NpyTVFi6yBiyBY6a0oDa01icbLqIBpVLG7w8VWzlgCqLvOinDK0j_Twr4lcLzCTYp41-jw-ERXVmrd4bSrS8P7UNNilwdMh_tM9pzjTKh9N_dHHJUb0wDNqhrVz-xRvOca_SYQOZN2bbc7RYqSR_XkkoBgqreXjDV6BWV4wcKic8xTqJQsLr11gPhXdsYSNZ4WyqBgLw_YVNxCNlzWGCha_jMocXjcFQlgWeyKxr_t_OZu1_PSmQCcf7BDzd0WNkpm_WMobUUDptfmMZTsLYY5HYfJ8oOkjcLjp3fZHSJodbo7Atz5uUxfEinHWDNgwiMQiWJplX32T7OXzUKYT59oec1TNwb0LmtIeEcX-dnK1S1gUcIN_a45CjGKzRf8sXkdASo26mptH4MUVs5QRpZsMQyQq0vI2xT6ifHgiAWK66LQTzV3krJCZ3QcFeoFYRL0Z-6laBf0ch8enR5ZK4uy180rXKQdHCfBFDNPmD-kRaHtShnKXtL-MnSDTfVR6PooLLoM8ApDhWwFqTW82nT4IbyjeISPtnFV8p_SmyP-dbZtpSE89IqcAtnx2sF9cHKzGMZTtfTP30lMs3c-RBrS8hMxP10QI8C5gKljwgdAPKccV_QojGzLelJGW8ZeYcBi9vNdLJKYs-U-rKgqjtV53JLNRIalqXk0ROHhirzK305yM70psAvOwLh3fvndyXJwQz3njafUp9PwqAGeQ3wgVPI6zKV-QVoDozPavG-icIEUE33ppjiMqf_g0hMYlOZ3TzZVkKA5tUkYPHNpjPult10y_Mm7nMc2aHIrpnYeT_vy5JIuXfPOHOW0aA0dv9Q=w1354-h903-s-no?authuser=0',
      'https://lh3.googleusercontent.com/BANi3XGGIFnhPESAmxCyGRWsiRhyWXWkjoUUvWrxUrhcDNM8IhkU9ZnO0Vh6dth_rqQ6C-Hm6tTruA1w7xWfwDHQLMAls7GQDNqXiMw1w7MFpcd05FRMkeCDojcgZhn5QduELlJOG5bgpLzwhivLN6qRQjpf8McuRa5atg2S0U0yyTB447e7RuMGSdYHVXjaPCCa6ZF3Xt31hGzlxQNWQHHjDIKCTz-7AD5jbnBgRElMHkeyy3bxNESTIIZDiMRWr3KOemxgzJZLxbCZ-63uwgY22bO2sguL0fjfKZRzcL7iDXMu4TjsmSzMXI0wl1W-VMRANHRlpLHgUJKy-LqnvjK_izUyWTRQfg9fOIxa-4jhuk6EafYfHKFOK9ZC2HP2FjEQPx7_VjpnMsTApnP44pQluFXTZaNHFZDRXOuNjKoOHtdgHhiKhARJH4LmBdVWjA8ErJ5Yi9c3bsilZwoxy1avrncXKW59li9JbKuW4Yy6CofKddrw_NTyLC9_sQkghukpCeLOep7RTij2HdsrQxKUXaKpOWR968cYthi0H-am9HKbD0enXfkeBtCeDV1im22HpdvJVyawbNCce3zIIhXs2ifd6X1gFhhOQ9-y7Y6DsgzkRirHvYrKK7c4hUIgiUpUk7wZomTClcNEVivIoM18Rbru83dIEcgN36gBGzxq-bUPlmcoQTXkNRWxdnzOnC3fvbVhFt-ccMfDaCOVh37K4_j2xJhathFTwDZO4G5gY59QbNTpj9V229C4v3q57Rs-5MPsCfnnelmU5e3tp_uDH2hTwzmDV40NwvFwIyeC1sYnKlDvFCuqpGHyB7DDzJn_Cak8pLjpv3doVWLEX_yh9TlJIg19blYJAFk2LPCbXH4Y7HUSW_vUYw6j4jC1Qa4558w3r2A-_Jb9K4qOsPZxet_GGWCM-Ghh0xzF_6t7QADg_9JoDZcw2D34lsJzUIn6m7PrqKiYwliG29UiCA3h0iYvBfabZ-Q8Gci-EDB0GkItDflxX2ovPbDrN9yuSNOvXUN2-sGDQnXXl0w-ldeJ69z9D_2mNAc91mNAzK73sDjUo2yz3pG20o_XBcWOt6-ORwfkTulUiDHWF98GQtRXEtiM0KP-HkiIKpCVPjoI11GVCD0W__-6kifVFgyKb1K1T_Y0a4jBtiauC7KlqnTAzH1Qj60iUTOv-nzP2g=w1354-h903-s-no?authuser=0',
      'https://lh3.googleusercontent.com/l59V8sSJg3UNY-9bCKAobYpRZeFgldPCO2cjc5KTUW7Xqsd9CS6ynfdrvgk8aCSrT99DnQj50LmLfQXwGkrBZ7nZ_-oVTg0u3TMeTqfgYzw4R8tAEcQm9jy9cQakHz62yG7W_GIMFXO2wxuLpK3if7zurB7XfC7hGdETMK5WBSUVXl5v2zfqNJK_DlChJKpvqKSr0RWxb1nFfbtTFcfgfQ4lgwT4vcPyVO6uDjU9uIZNnoQ_HBLTRJWHH3s39EpUrtAiYmNb7pzH5yNi8c_ToHhNhAXLFnJGO4gZ6FtpDXrUYB7jqYu_j9bByFWkF_3z-_4txLnVJMddfWUeabSyiJjeE96Mm0nB4PVx_4XF3TrNuK7MiqEwR__dCVcD_dZJxp77sK9g4mmLENuXbtN1NYGyqV95Gi0JP062bIUPnanYUChUc5UPuH_PCdy81ptxM5_-Y51Ok-n1q6-jhHU6gvMpFW1bwLytSvBGwYH_nzZ6YC4lRWdrjZa-m0LnuF-JNCuJSYNr-vTO8KpzMwOXEzCfSWfFAS0B-8BnV6dqcZQR-SARR96iIe-AbXmTNbIZYBSKxIfSff1nKVbr_jTZHo0RVl5BHVY1t71A8o_mOc7vszehphEw78Us1r-Xw98d12QTQ15N9X5_jDylzguMMFcTAqup61kJpQklPTFSJ7pbamzRJ4kvrOBGtMaBZMe2TN3ekSFKqOFlJWISGMDp4CU7upsX2ULNzWrQsO7NoAs-gN0BCQ9hUtrhVt2ujL87DH1CcPW86SEP4MYjsItX_1R5dT8xLB_-1ySoFIkmZQAfZFYumdeqSDY8EO_H4hAfqzYTKqa1d4VTHvkkhUG1ZUmmc1amGIEt_U4cg2iJ4RYr3heNf4qH6rkXPxQJK2fzj3G07jJMV1SRi1m0mfG541zH47CAOWamvoQpaG8y9a90eyli47B3KLYiNb1ALvnoKjc53rWMuRqH6zTh712fFQ6bJwVG5g38jsQC_mtGwmx6IFzYfdZ30N06HCrSGh2bTAmcoRtK_cywdG6btiN1lQvW7NfLDt5yn0uussBsnLF54T0uuy7kbeXvDqZlL39V9jZLoatidkR4HzWLgkyD_l8dUlJFdyycAK5qL_N0s2Vr6RbHLRGoBbInXshIExEy8fIeM4t4KEmdbwnM4wH7EuscaiyS5Pyh-9ZjrRoDog=w1354-h903-s-no?authuser=0',
      'https://lh3.googleusercontent.com/e0D9kty1jg9R9ErVaPrmH43yR01cYbfsXERMEWHn6PyvVWg6Io9-le6PFfXwqLdQNE5A1pVItU-Iv3cYiQ88ls7oikTYzwK4XtJYZxOibcTBD_9FBxDuOpqsKHP-815O43aEX0S6XZJfi5os1Slt2pJkcGEzhA_JM855JtepLd4-jxU5kOPmRO0oSjhbuUjwv7ghtik8j6qsj5BhpEO0FavI15quNQRqxvcgBa9j7DSj9xQqHCPMCNJTt2gD4R7ekTnRyRaAQuvYPSkDOmF9eTaDqpuJp6LXgv0OgANUdjN4oP8TEWWxO2__j9TKX4U-5G-HvMn9yhXLKPVLH-tl--kC2h1033uMa-XvickEPp4fNRkOn5a07K_tt2O4L6P3lsM7Ou44Z6mZoN9RFsmdatChpWOBiOS3ajn3WKIu2YYITjbH4lt0lQ2-0twvPrfIBcpdgap_15E0DSyra_gGRBCrmAQZUTVpYXvr_SMengMyuNjjUgsPV4CJf8kMmEsVIb5BS7-1wxdLI6RPos1mpRSN35n08AewHhSpVKNvgoTcVR7e5VBpzkpGRfLd9BJkR9NhAm-98LlC_OU13mhn8TzeFk0Ma4ITh4Q4Zon5gAMQ3cKkn1voEi_G9YXn-uoaXAeSYUAF7ioNhWGqbyavzNDK7bKzZu49_jhh-IkFoCc2P71UQ8ISvX34tMy-k8LM1JZO79WTsk_kPBw-TF40HOGjtGUCmemuIykXh2D5Spo_QPHWSfoqla0p_ghoNbC7HY3oQWWqzJhNP68eAJSv6aJBX8_ct3lAEV9QfLHQUcL8Z7ZYnCaiZhXbck33VanPBODPbyh_r5VpBPze3jQmm8mKvG9CmzPGBjHA361PH12mxsWGlcV1PByTSuJS99cttYT8pMHErCDvmUN9C2KaWGdPpRgpSqhrtbzjLORZz7jUEn1KC3Kp7OJdRA4fykAItRbGgbEXwH0L9PkPQwyRPuPkccqlIp1nI1vTfEncYP1GoFavibZuEZmuzdJo0QhNofOVTIHJPTgORSwY7jAnr6jIONqQPtJSmPKguiRq0dxzBpfky5prfoGZvPzPevWLnObPRvHi6lmlMcQToDR5KkC3IA3f0fHF9-0UaPxmWGTBN0dhfq-Z9VrE-Q6KAmS32RkFwDY58sjsyo7JTN-6MRTQ1gyitmd9vmsC4oVztw=w1354-h903-s-no?authuser=0',
      'https://lh3.googleusercontent.com/_KwZDuFQHmZTfbNQ7M0fTPUyA1cylnBr4hRDr8BaI8QpHuZRzXQfVaMxYey03KXboAjE5Rv-S7DwseO8iqBVm6HnhpU5Us1Q2ViPt1WxoHtAIHtm6KHXNksSeDY-gMMhWO2sG9EsyhhV1WA5V3EZH95d3ZTIupjttzvrkaLQpSyZ3wt8GRgQBRs9bHz8QscXDknqSlOYvRd2TnuYCz4qcczoSG8qbA-YkWj1xFj-477vZq5oe4mK2VBcBFiusRNKn88AVeQ1beihwF6MO5gFNWfOSgdyuUOlatymHK4gKDua4F-Q8hKO_xt7ZQnIeokeaCWGZLcWKwbkmMyx_DYFRd9BL873GpZo2mrLGM_ubW310X_XXwvfal9lNzdFjtPuB1PIEt8qEcXyvT8wzn9iGVDVc15pizdFU5GIqydSM138Zd4ajKtAI3U23sCwumfpXgRsku1h7gaPwRc1QRkMNyF2Jgk5eurA7zz0sw6qtJUuVvO-wR0xXCaizIYEyw8ehquzjlyzF_svxB8hhbns1010X932iLVmxUmi-GUpqIatV022s0-oxiOuYu5jILK2_K5gZpvHaCF3syBLVM0eXczJjeZxRoYXZD6ISfgFpYBhMBgWKx7XXNy0RtxHlcmLF-OCd4wezRv4ix4s3JrsP07qqHuutqLrtjWpPeE-xawSpq0VCDCe4Q8vrZ1mbGXZkY9FHTXBalquNfWec02NvhXorE6sMZ6F3gxolM_ETvkL0oGrMlR6WXP6CABx6I16_NsfFiuHtzBRi2AT86mD47lZKCj4lBDOqi9ZeameZZvqUMctmJfwOaZVa4rAP4ciXoEjHDnolJkxS2dAzpKrcVd6-QQURH2C7ZIC3hziA6nCXGQwoLDUN9pzkT77pVeBnhvpQgosfJRqEHGGE3r1ibgAHzTCb3Y6rsSxnhRibWo9DwMw4cZlc5taYUikT7vZ_CsTVPGpU7f90fDRiB4Mxafdx8WmkUycxzb8uczzul2SMP7ScVc8JKs-5QSet5z9F7rDgVe7A01dOvUqY1IezBYRxIZNmlHevAZqcU-CVkIJ4OVp5Nl6X5TaHZ6T-kBnAyKyzl0o9pPkXhbgC_EPFuSlokcpobf0jBWyR7OXSsJs_GMrAMyicnPxq31NYhc6t4i4SNKz3jSspFFWmxG29T_KMwxHKeR3jtv9iFeVGw=w1354-h903-s-no?authuser=0'
    ],
    id: 1,
  },
  {
    type: 'Бокси',
    link: 'https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    m2: 200,
    location: 'levan',
    price: 7000,
    exactAddres: 'Вулиця Леваневського 85, Біла Церква, 09100',
    keyFeatures:
      'Закрита територія / Рампа / Приміщення різних розмірів / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація',
    id: 2,
  },
];

export default function Find() {
  const hiddenFilterOptionRef = useRef(null);

  const router = useRouter();
  const {
    query: { whatIsRented, size },
  } = router;

  const openBugerMenu = useSelector((state) => state.burgerMenu.openBurgerMenu);
  const openBlur = useSelector((state) => state.pageBlur.pageBlur);
  const openPhoneModal = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );

  const [greenBorder, setGreenBorder] = useState(false);
  const [selectedButtonFilter, setSelectedButtonFilter] = useState('all');

  const [filterInputValue, setFilterInputValue] = useState(size || '');
  const [showXIcon, setShowXIcon] = useState(false);

  const [visibleFilterOption, setVisibleFilterOption] = useState('m2');
  const [alternativeFilterOption, setAlternativeFilterOption] =
    useState('ціна');
  const [openedFilterModal, setFilterModal] = useState(false);

  // let objectsfilteredByCategory = rentObjectsFromDB;

  // const [test, setTest] = useState(
  //   rentObjectsFromDB.filter((obj) => {
  //     console.log(obj);
  //     console.log(whatIsRented);
  //     return obj.type === whatIsRented;
  //   })
  // );

  // useEffect(() => {
  //   console.log("changed");
  //   setTest(
  //     rentObjectsFromDB.filter((obj) => {
  //       return obj.type === whatIsRented;
  //     })
  //   );
  // }, [whatIsRented]);

  // console.log(test);
  // useEffect(() => {
  //   console.log('efec')
  //   if (whatIsRented !== undefined) {
  //     console.log('here')
  //     rentObjectsFromDB = rentObjectsFromDB.filter(
  //       (obj) => obj.type === whatIsRented
  //     );
  //   }
  // }, [whatIsRented]);

  // useEffect(() => {
  //   console.log('efec')
  //   if (whatIsRented !== undefined) {
  //     console.log('here')
  //     rentObjectsFromDB = rentObjectsFromDB.filter(
  //       (obj) => obj.type === whatIsRented
  //     );
  //   }
  // }, []);

  // console.log(rentObjectsFromDB);

  const [objectsForPage, setObjectsForPage] = useState(rentObjectsFromDB);

  // console.log(objectsForPage);
  const [arrayFilteredWithButton, setArrayFilteredWithButton] =
    useState(rentObjectsFromDB);

  const filterInputHandler = (event) => {
    setFilterInputValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setShowXIcon(true);
    }
    if (event.target.value.trim().length === 0) {
      setShowXIcon(false);
    }
  };

  const inputClickHandler = () => {
    setGreenBorder(true);
  };
  const inputBlurHandler = () => {
    setGreenBorder(false);
  };

  const xCloseHandler = () => {
    setFilterInputValue('');
    setShowXIcon(false);
  };

  const hiddenFilterValueHandler = (e) => {
    setAlternativeFilterOption(visibleFilterOption);
    setVisibleFilterOption(e.target.innerText);
    setFilterModal(false);
  };

  const visibleFilterButtonHandler = () => {
    setFilterModal((state) => !state);
  };

  const dynamicPlaceHolder =
    visibleFilterOption === 'm2'
      ? 'введіть бажану квадратуру'
      : 'введіть бажану ціну';

  const filterAreaButtonsHandler = (e) => {
    setSelectedButtonFilter(e.target.id);
    if (e.target.id === 'all') {
      setArrayFilteredWithButton(rentObjectsFromDB);
      return;
    }
    const filteredArray = rentObjectsFromDB.filter(
      (obj) => obj.location === e.target.id
    );
    setArrayFilteredWithButton(filteredArray);
  };

  useEffect(() => {
    if (filterInputValue > 0 && filterInputValue.trim().length > 0) {
      if (visibleFilterOption === 'm2') {
        const filteredArray = arrayFilteredWithButton.filter(
          (obj) => obj.m2 >= filterInputValue
        );
        setObjectsForPage(filteredArray);
      } else if (visibleFilterOption === 'ціна') {
        const filteredArray = arrayFilteredWithButton.filter(
          (obj) => obj.price >= filterInputValue
        );
        setObjectsForPage(filteredArray);
      }
      setShowXIcon(true);
    } else {
      setObjectsForPage(arrayFilteredWithButton);
    }
  }, [filterInputValue, arrayFilteredWithButton, visibleFilterOption]);

  const selectedAreaButton =
    selectedButtonFilter === 'all'
      ? 1
      : selectedButtonFilter === 'pion'
      ? 2
      : selectedButtonFilter === 'vokz'
      ? 3
      : selectedButtonFilter === 'levan'
      ? 4
      : '';

  const textForCardHeading =
    whatIsRented === 'Офіси'
      ? 'Офіс'
      : whatIsRented === 'Складські приміщення'
      ? 'Склад'
      : whatIsRented === 'Холодильні приміщення'
      ? 'Овочесховищe'
      : whatIsRented === 'Бокси'
      ? 'Бокс'
      : '';
  const noObjectsFound = objectsForPage.length === 0;

  return (
    <>
      <section className={style.textAndFindContainer}>
        <div
          className={`${style.imitateBigInput} ${
            greenBorder ? style.greenBorder : ''
          }`}
        >
          <button
            type="button"
            onClick={visibleFilterButtonHandler}
            className={style.textButton}
          >
            <span className={style.moveText}>{visibleFilterOption}</span>
            {!openedFilterModal && (
              <ArrowDown
                className={style.arrowDown}
                color="#7ed957"
                box={[8, 3, 4, 8]}
              />
            )}
            {openedFilterModal && (
              <ArrowUp
                className={style.arrowUp}
                color="#7ed957"
                box={[8, 0, 4, 8]}
              />
            )}
          </button>
          <input
            type="number"
            placeholder={dynamicPlaceHolder}
            value={filterInputValue}
            onChange={filterInputHandler}
            onClick={inputClickHandler}
            onBlur={inputBlurHandler}
          />
          {showXIcon && (
            <FontAwesomeIcon
              icon={faX}
              className={style.xIcon}
              onClick={xCloseHandler}
            />
          )}
        </div>
        <div className={style.heddingAndButtons}>
          <h2>{whatIsRented} в Білій Церкві</h2>
          <div className={style.buttonsAndFilterResult}>
            <div className={style.buttonsContainer}>
              <button
                type="button"
                className={`${
                  selectedAreaButton === 1 ? style.buttonGreen : ''
                }`}
                id="all"
                onClick={filterAreaButtonsHandler}
              >
                Усі
              </button>
              <button
                type="button"
                id="pion"
                onClick={filterAreaButtonsHandler}
                className={`${
                  selectedAreaButton === 2 ? style.buttonGreen : ''
                }`}
              >
                Піонерська
              </button>
              <button
                type="button"
                id="vokz"
                onClick={filterAreaButtonsHandler}
                className={`${
                  selectedAreaButton === 3 ? style.buttonGreen : ''
                }`}
              >
                Вокзальна
              </button>
              <button
                type="button"
                className={`${style.lastButton} ${
                  selectedAreaButton === 4 ? style.buttonGreen : ''
                }`}
                id="levan"
                onClick={filterAreaButtonsHandler}
              >
                Леваневського
              </button>
            </div>
            <div className={style.textFilterResult}>
              <p>
                <span className={style.borderForText}>
                  Всього знайдено приміщень: {objectsForPage.length}
                </span>
              </p>
            </div>
          </div>
        </div>

        {openedFilterModal && (
          <div className={style.filterModal}>
            <button
              ref={hiddenFilterOptionRef}
              id="ціна"
              onClick={hiddenFilterValueHandler}
              type="button"
            >
              {alternativeFilterOption}
            </button>
          </div>
        )}
      </section>
      <div className={style.objectsCardsContainer}>
        {!noObjectsFound &&
          objectsForPage.map((object, objectId) => (
            <ObjectCard
              key={object.id}
              link={object.link}
              m2={object.m2}
              price={object.price}
              exactAddres={object.exactAddres}
              description={object.description}
              heading={textForCardHeading}
              id={object.id}
              prior={objectId === 0}
            />
          ))}
      </div>
      {noObjectsFound && (
        <div className={style.NoObjectsFound}>
          <p>
            Нажаль, приміщень не знайдено. <br />
            Спробуйте змінити фільтр
          </p>
        </div>
      )}
      {openBlur && <PageBlur />}
      {openBugerMenu && <ModalMeinMenu />}
      {openPhoneModal && <ModalPhone />}
    </>
  );
}
