/* =========================================================
   AVALIAÇÃO DA CENA — App de Informe Operacional
   ========================================================= */

/* ---------- Ícones SVG para a Tela 1 ---------- */

const ICONES_TIPO = {
  colisao: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2452 4154 c-16 -11 -22 -25 -22 -52 -1 -69 114 -944 122 -925 14 37
119 916 113 945 -9 37 -36 48 -123 48 -45 0 -75 -5 -90 -16z"/>
<path d="M2988 3863 c-12 -15 -59 -124 -263 -615 -8 -21 -13 -38 -11 -38 6 0
410 530 424 557 18 33 5 51 -59 83 -68 35 -71 35 -91 13z"/>
<path d="M2007 3790 c-36 -23 -47 -35 -47 -56 0 -18 62 -107 212 -304 117
-154 213 -278 215 -276 6 6 -259 630 -275 649 -22 25 -51 21 -105 -13z"/>
<path d="M3348 3624 c-25 -8 -68 -31 -96 -52 -58 -44 -712 -800 -712 -823 0
-13 132 -294 144 -306 1 -1 24 9 51 22 51 26 123 33 168 16 70 -27 136 -120
137 -191 0 -97 -67 -189 -154 -211 l-43 -11 8 -41 c4 -23 8 -88 9 -144 l0
-102 53 -15 c28 -8 392 -105 807 -216 415 -111 756 -203 758 -205 2 -2 -10
-51 -27 -109 -32 -112 -31 -145 6 -164 30 -17 328 -92 361 -92 22 0 36 7 46
23 23 36 248 895 253 967 4 53 -14 163 -97 600 -56 294 -110 554 -120 577 -25
56 -108 143 -162 170 -24 12 -307 89 -629 172 -626 161 -658 167 -761 135z
m710 -423 c260 -72 493 -139 516 -150 48 -21 87 -67 105 -122 15 -47 140 -713
135 -718 -3 -4 -346 88 -1906 507 -10 2 -18 7 -18 11 0 3 110 132 243 285 276
319 291 332 392 322 33 -3 273 -64 533 -135z m667 -1220 c157 -71 168 -290 18
-378 -104 -61 -228 -23 -286 87 -26 49 -28 62 -23 114 10 94 60 164 135 186
45 14 115 10 156 -9z"/>
<path d="M689 3194 c-59 -18 -134 -69 -170 -114 -27 -34 -459 -928 -496 -1026
-16 -45 -18 -92 -21 -544 -2 -272 -1 -505 2 -516 10 -39 50 -45 250 -42 172 3
189 5 202 22 10 15 14 52 14 138 l0 118 909 0 909 0 4 -121 c4 -168 -7 -161
244 -157 170 3 196 5 211 21 17 17 18 51 18 515 l0 497 -26 70 c-14 39 -124
277 -245 530 -200 420 -224 465 -271 513 -30 30 -78 65 -110 80 l-58 27 -660
2 c-550 2 -668 -1 -706 -13z m1286 -289 c22 -11 55 -40 73 -65 26 -35 322
-648 322 -666 0 -2 -445 -4 -990 -4 -545 0 -990 3 -990 7 0 12 291 615 316
655 13 21 35 45 49 54 66 43 74 44 640 41 517 -2 542 -3 580 -22z m-1438 -998
c156 -81 155 -299 -2 -380 -127 -65 -286 23 -302 166 -11 93 47 191 132 223
47 17 129 13 172 -9z m1856 7 c57 -19 123 -90 133 -141 27 -143 -67 -265 -205
-267 -188 -2 -283 231 -147 363 60 58 136 74 219 45z"/>
</g>
</svg>`,

  capotagem: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2675 4511 c-16 -10 -130 -120 -252 -243 -199 -200 -223 -228 -223
-256 0 -44 38 -82 82 -82 29 0 57 25 261 228 126 125 235 239 243 254 37 71
-43 143 -111 99z"/>
<path d="M2074 4396 c-17 -8 -34 -21 -38 -31 -3 -9 -6 -101 -6 -204 0 -183 1
-188 23 -209 45 -42 117 -20 132 41 4 13 5 101 3 195 -3 156 -5 173 -23 191
-28 27 -55 32 -91 17z"/>
<path d="M1810 4273 c-8 -3 -102 -91 -207 -196 l-193 -192 -123 123 c-95 95
-128 122 -149 122 -81 0 -88 -23 -88 -285 l0 -215 -183 0 c-179 0 -184 -1
-205 -23 -14 -14 -22 -36 -22 -57 0 -30 16 -49 137 -172 l137 -138 -127 -128
c-147 -148 -159 -172 -109 -222 l30 -30 262 0 262 0 29 29 c16 16 29 37 29 46
0 24 -27 72 -45 79 -9 3 -85 6 -168 6 l-151 0 92 94 c59 60 92 101 92 115 0
37 -25 73 -110 156 l-81 80 127 5 c170 7 164 -1 164 216 0 90 3 164 8 164 4 0
39 -32 77 -71 79 -80 103 -93 143 -78 15 5 93 76 175 157 l147 147 0 -157 c0
-86 3 -164 6 -173 14 -35 58 -45 206 -45 l142 0 -62 -63 c-94 -95 -93 -99 71
-264 114 -113 138 -133 164 -133 17 0 39 3 48 6 23 9 46 60 40 87 -4 13 -49
66 -101 118 l-94 94 102 102 c92 92 102 106 102 139 0 26 -7 42 -23 55 -21 17
-43 19 -231 19 l-209 0 -3 220 c-3 204 -4 221 -23 239 -22 22 -62 33 -85 24z"/>
<path d="M3440 3730 c-118 -71 -221 -138 -229 -150 -12 -18 -8 -28 35 -105 83
-145 43 -148 324 20 134 80 246 147 248 150 5 5 -68 133 -105 183 -13 17 -32
32 -41 31 -9 0 -114 -58 -232 -129z"/>
<path d="M292 3657 c-14 -14 -22 -36 -22 -56 0 -30 18 -52 158 -193 86 -88
170 -166 185 -173 58 -25 111 9 111 71 0 33 -14 50 -170 205 -156 154 -173
169 -205 169 -24 0 -43 -7 -57 -23z"/>
<path d="M2860 2889 c-591 -351 -1077 -645 -1081 -651 -3 -7 -16 -54 -29 -105
l-22 -91 145 -244 c111 -187 152 -247 174 -257 15 -7 121 -53 235 -102 l207
-90 213 127 c117 70 284 169 371 221 88 52 252 149 365 217 114 68 342 203
507 301 165 98 334 198 376 223 l76 45 22 253 c13 139 21 256 19 261 -6 10
-281 477 -284 481 -4 6 -188 52 -204 51 -8 0 -499 -288 -1090 -640z m1298 309
c56 -38 153 -199 160 -266 7 -75 -12 -125 -74 -191 -82 -89 -106 -96 -316 -87
-185 8 -213 15 -271 65 -48 43 -71 104 -65 180 7 95 35 127 204 227 179 106
176 104 255 101 52 -2 75 -8 107 -29z m-667 -403 c133 -93 130 -290 -4 -378
-61 -40 -477 -287 -524 -311 -48 -24 -139 -21 -193 7 -95 47 -145 163 -115
264 9 29 30 67 48 86 17 18 142 99 277 179 345 205 313 190 397 186 61 -3 78
-8 114 -33z m-1005 -530 c90 -27 153 -113 154 -211 0 -44 -11 -73 -71 -195
-101 -206 -119 -225 -234 -255 -72 -20 -113 -17 -171 10 -54 25 -77 51 -137
151 -68 116 -70 210 -6 289 37 43 284 194 349 212 59 16 58 16 116 -1z"/>
<path d="M3885 2993 c-117 -70 -130 -81 -133 -108 -1 -16 2 -37 7 -45 11 -16
112 -28 250 -29 83 -1 84 -1 117 35 19 19 34 45 34 58 0 12 -19 53 -43 91 -59
97 -67 97 -232 -2z"/>
<path d="M3080 2516 c-281 -167 -300 -184 -264 -233 41 -56 62 -48 349 125
251 151 260 158 263 190 4 44 -21 72 -62 71 -21 0 -110 -48 -286 -153z"/>
<path d="M2277 2039 c-100 -59 -139 -87 -143 -104 -4 -17 6 -44 35 -93 22 -38
47 -74 55 -81 16 -14 74 -8 108 10 23 12 148 260 148 293 0 13 -6 28 -12 34
-35 27 -54 21 -191 -59z"/>
<path d="M185 3185 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 24 -25 25
-25 220 -25 195 0 196 0 220 25 33 32 33 78 0 110 -24 25 -25 25 -220 25 -195
0 -196 0 -220 -25z"/>
<path d="M1865 2794 c-222 -133 -245 -149 -245 -171 0 -11 91 -176 117 -212 2
-3 485 280 501 294 2 1 -23 46 -54 99 -51 87 -77 117 -101 116 -4 0 -102 -57
-218 -126z"/>
<path d="M4620 2607 l-55 -33 -6 -64 c-6 -59 3 -113 21 -133 9 -11 176 90 200
121 27 34 25 75 -6 111 -35 42 -81 42 -154 -2z"/>
<path d="M3517 1776 l-897 -534 215 -230 216 -230 69 -12 69 -12 696 413 695
414 22 68 22 68 -98 295 c-53 162 -101 294 -104 294 -4 -1 -411 -241 -905
-534z"/>
<path d="M2265 1208 c-64 -40 -74 -54 -75 -101 0 -28 7 -44 26 -62 41 -38 83
-33 178 22 116 66 111 61 79 96 -27 28 -120 77 -146 77 -7 0 -34 -14 -62 -32z"/>
<path d="M1820 490 c-21 -21 -26 -69 -10 -100 5 -10 24 -23 41 -29 43 -15
2505 -16 2545 -1 57 22 73 89 31 128 l-23 22 -1282 0 c-1269 0 -1282 0 -1302
-20z"/>
<path d="M4541 484 c-28 -35 -26 -67 3 -101 24 -28 25 -28 141 -28 116 0 117
0 141 28 29 34 31 66 3 101 -20 26 -22 26 -144 26 -122 0 -124 0 -144 -26z"/>
</g>
</svg>
`,

  queda: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1865 4602 c-62 -22 -1313 -827 -1373 -882 -24 -22 -53 -62 -65 -88
-21 -45 -22 -62 -27 -482 -7 -545 11 -484 -215 -724 -169 -179 -185 -204 -185
-284 0 -51 15 -79 194 -357 175 -271 205 -311 246 -327 73 -28 133 -7 299 105
73 49 75 49 100 33 63 -41 156 -79 222 -89 308 -48 573 234 517 549 l-8 42
421 271 421 272 32 -24 c86 -66 180 -92 306 -85 74 5 99 11 164 42 136 66 227
185 257 334 10 53 9 151 -3 202 -2 8 82 68 202 146 113 74 215 145 227 159 33
38 49 99 37 143 -10 37 -423 686 -465 731 -27 28 -78 51 -117 51 -16 0 -69
-21 -118 -46 -83 -42 -93 -45 -154 -42 -62 3 -80 11 -380 169 -173 90 -327
170 -342 176 -51 22 -139 25 -193 5z m384 -397 c147 -81 260 -150 269 -164 14
-20 14 -26 1 -49 -16 -27 -730 -493 -741 -483 -24 22 -358 555 -351 561 16 15
406 262 427 271 11 5 48 8 81 6 57 -3 76 -11 314 -142z m-875 -563 c97 -151
176 -277 176 -282 0 -13 -810 -531 -840 -537 -56 -11 -60 9 -67 350 -7 337 -3
364 55 420 26 25 493 330 498 324 1 -1 81 -125 178 -275z m1444 -448 c154 -76
171 -287 31 -390 -85 -63 -197 -57 -280 15 -53 45 -79 101 -79 171 0 173 173
281 328 204z m-1567 -1039 c59 -42 99 -119 99 -193 0 -130 -98 -225 -231 -224
-203 1 -301 253 -152 394 46 44 90 59 170 55 61 -2 78 -7 114 -32z"/>
<path d="M4420 3871 c-61 -19 -470 -232 -484 -253 -9 -12 -16 -35 -16 -51 0
-36 49 -87 83 -87 14 0 131 51 259 113 234 114 278 143 278 189 0 35 -29 76
-61 87 -18 6 -32 11 -33 10 -1 0 -12 -4 -26 -8z"/>
<path d="M4178 3381 c-197 -6 -198 -6 -224 -32 -35 -36 -36 -92 -1 -126 l25
-25 198 1 c110 1 232 4 272 8 64 5 75 9 97 35 29 34 31 57 10 97 -18 35 -61
52 -129 49 -28 -1 -140 -4 -248 -7z"/>
<path d="M3875 3108 c-32 -19 -44 -41 -45 -80 0 -25 7 -45 21 -59 25 -25 403
-209 445 -216 47 -8 94 36 94 88 0 25 -7 46 -19 58 -26 26 -408 211 -446 217
-16 2 -39 -1 -50 -8z"/>
<path d="M2159 2165 c-151 -55 -245 -166 -269 -315 -14 -89 -13 -1162 1 -1213
43 -156 254 -181 327 -37 l22 44 0 577 c0 512 2 579 16 593 14 14 152 16 1370
16 1127 0 1360 2 1388 14 46 19 94 81 102 132 8 59 -3 100 -38 140 -61 69 56
64 -1485 63 -1126 0 -1405 -3 -1434 -14z"/>
</g>
</svg>`,

  incendio_edif: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3595 5068 c-21 -170 -86 -270 -322 -495 -180 -172 -245 -252 -266
-330 -6 -24 -14 -43 -17 -43 -3 1 -15 23 -28 50 -13 28 -42 65 -66 85 -51 41
-158 97 -167 87 -4 -4 -30 -90 -59 -191 -50 -178 -51 -185 -33 -202 10 -10
304 -266 653 -568 l635 -550 222 -1 222 0 61 78 c76 96 151 248 185 372 34
124 44 316 22 440 -13 79 -151 589 -166 618 -5 9 -22 5 -68 -18 -84 -42 -152
-104 -178 -164 l-22 -49 -6 62 c-20 187 -151 433 -343 644 -70 75 -233 227
-245 227 -4 0 -10 -24 -14 -52z"/>
<path d="M1290 3902 c-52 -37 -142 -114 -201 -172 -88 -88 -113 -120 -151
-195 -57 -111 -87 -220 -95 -347 -3 -54 -8 -98 -9 -98 -2 0 -56 54 -120 120
-65 66 -119 118 -122 116 -2 -3 -30 -139 -63 -303 -66 -338 -73 -426 -40 -555
61 -238 245 -432 486 -514 104 -36 295 -45 395 -20 237 59 426 235 506 471 32
97 43 251 24 347 -29 150 -126 370 -280 638 -150 261 -220 432 -220 542 0 21
-3 38 -7 38 -5 0 -51 -31 -103 -68z"/>
<path d="M2287 3489 l-256 -222 26 -56 c55 -122 124 -326 139 -414 21 -118 14
-309 -15 -418 -47 -182 -133 -331 -266 -465 -101 -102 -148 -136 -263 -194
-137 -68 -235 -92 -404 -97 l-148 -5 0 -809 0 -809 415 0 415 0 0 580 0 580
615 0 615 0 0 -580 0 -580 415 0 415 0 0 1155 0 1155 183 2 182 3 3 148 3 147
-273 0 -273 0 -130 113 c-100 87 -1047 905 -1126 974 -14 12 -47 -14 -272
-208z m403 -1324 l0 -245 -150 0 -150 0 0 245 0 245 150 0 150 0 0 -245z"/>
<path d="M2230 430 l0 -430 315 0 315 0 0 430 0 430 -315 0 -315 0 0 -430z"/>
</g>
</svg>`,

  fogo_veiculo: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M124 4586 c-3 -8 6 -61 20 -118 72 -284 52 -577 -63 -943 -55 -177
-70 -244 -77 -356 -11 -165 29 -343 107 -475 68 -116 211 -235 346 -289 146
-59 177 -39 89 55 -61 67 -118 174 -135 258 -18 87 -13 169 29 481 44 328 56
401 69 414 6 6 29 -18 58 -58 99 -140 178 -227 293 -324 224 -190 311 -340
310 -529 0 -48 -2 -100 -3 -116 -3 -47 21 -42 72 13 209 226 234 555 69 885
-110 221 -295 435 -419 487 -44 18 -51 0 -28 -80 21 -75 25 -171 7 -189 -53
-53 -137 58 -208 273 -65 198 -131 315 -244 434 -64 67 -153 134 -223 170 -50
25 -62 26 -69 7z"/>
<path d="M2093 3506 c-61 -20 -122 -58 -169 -108 -23 -24 -162 -230 -308 -458
-286 -445 -331 -502 -438 -554 -31 -15 -160 -51 -312 -86 -142 -33 -268 -66
-280 -72 -49 -25 -94 -70 -122 -120 l-29 -53 0 -471 0 -471 30 -48 c22 -36 45
-57 84 -77 53 -28 54 -28 251 -28 l198 0 12 -37 c51 -161 220 -321 395 -376
98 -30 252 -30 350 0 172 54 317 185 383 345 l27 68 562 0 561 0 46 -95 c186
-382 690 -461 980 -154 65 68 101 125 131 203 l18 46 241 0 c232 0 243 1 291
24 59 27 77 46 104 106 20 43 21 64 21 500 0 586 -2 596 -161 835 -118 178
-169 272 -345 640 -162 338 -182 368 -286 422 l-53 28 -1070 2 c-865 1 -1078
-1 -1112 -11z m1215 -713 l-3 -438 -759 -3 c-509 -1 -771 1 -798 8 -51 14 -67
49 -43 100 9 19 100 172 202 340 197 325 244 385 325 413 36 13 125 16 561 16
l517 1 -2 -437z m800 418 c88 -45 94 -57 207 -405 58 -177 105 -339 105 -359
0 -54 -33 -83 -101 -92 -30 -3 -191 -5 -359 -3 l-305 3 -3 438 -2 437 210 0
c188 0 215 -2 248 -19z m-2425 -1801 c156 -58 234 -227 180 -386 -23 -67 -110
-154 -177 -177 -108 -37 -223 -15 -304 58 -62 56 -94 120 -99 204 -15 216 198
376 400 301z m2301 -1 c67 -25 139 -92 169 -157 16 -35 22 -66 22 -122 0 -87
-22 -145 -78 -207 -108 -119 -311 -125 -426 -11 -61 60 -83 110 -89 194 -6 96
15 159 76 225 85 91 211 122 326 78z"/>
</g>
</svg>`,

  vegetacao: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1847 4774 c13 -48 8 -165 -10 -226 -21 -70 -89 -172 -201 -303 -114
-132 -135 -198 -102 -320 32 -122 122 -237 224 -289 28 -14 53 -26 55 -26 2 0
-7 22 -20 49 -17 35 -26 73 -30 128 -7 97 7 129 101 231 36 40 69 84 73 99 13
50 7 110 -16 148 -12 21 -20 39 -18 41 6 7 82 -49 130 -95 70 -67 93 -161 62
-256 -10 -30 51 43 74 88 l19 38 36 -38 c48 -51 85 -121 92 -176 8 -58 -24
-131 -90 -204 -26 -29 -45 -53 -41 -53 4 0 34 14 67 32 105 56 193 175 219
299 22 104 -13 260 -102 446 -45 93 -48 94 -69 8 -6 -27 -22 -72 -35 -100
l-23 -50 -1 85 c-3 260 -141 446 -347 467 l-55 6 8 -29z"/>
<path d="M4007 4774 c13 -48 8 -165 -10 -226 -21 -70 -89 -172 -201 -303 -114
-132 -135 -198 -102 -320 32 -122 122 -237 224 -289 28 -14 53 -26 55 -26 2 0
-7 22 -20 49 -17 35 -26 73 -30 128 -7 97 7 129 101 231 36 40 69 84 73 99 13
50 7 110 -16 148 -12 21 -20 39 -18 41 6 7 82 -49 130 -95 70 -67 93 -161 62
-256 -10 -30 51 43 74 88 l19 38 36 -38 c48 -51 85 -121 92 -176 8 -58 -24
-131 -90 -204 -26 -29 -45 -53 -41 -53 4 0 34 14 67 32 105 56 193 175 219
299 22 104 -13 260 -102 446 -45 93 -48 94 -69 8 -6 -27 -22 -72 -35 -100
l-23 -50 -1 85 c-3 260 -141 446 -347 467 l-55 6 8 -29z"/>
<path d="M3019 4147 c-102 -29 -208 -119 -245 -209 -17 -43 -22 -48 -50 -48
-90 0 -196 -73 -234 -161 -36 -86 -27 -177 27 -269 2 -3 -14 -4 -35 -2 -90 9
-186 -50 -217 -133 -17 -44 -17 -117 0 -172 7 -20 4 -23 -22 -23 -43 0 -146
-55 -184 -98 -119 -135 -109 -339 24 -458 27 -24 60 -47 73 -50 32 -8 30 -16
-5 -32 -89 -39 -180 -148 -212 -254 -104 -340 226 -649 564 -529 l54 18 34
-45 c72 -98 197 -162 315 -162 l54 0 0 -400 0 -400 -400 0 -400 0 0 319 0 318
49 6 c67 8 138 46 189 101 23 25 42 49 42 53 0 5 -42 8 -93 9 -50 0 -112 7
-137 13 -211 59 -393 246 -435 448 -36 170 4 348 107 484 l34 44 -28 45 c-139
219 -66 525 158 663 37 23 42 30 47 77 3 28 20 79 37 113 34 69 35 68 -49 93
-70 21 -146 14 -217 -21 -60 -29 -127 -100 -144 -151 -9 -28 -17 -34 -39 -34
-47 0 -133 -51 -165 -98 -48 -68 -47 -172 1 -252 2 -3 -19 -5 -45 -6 -117 -1
-195 -117 -159 -235 8 -25 6 -27 -36 -38 -109 -27 -191 -138 -190 -254 1 -96
55 -188 139 -235 10 -6 17 -12 14 -14 -3 -2 -28 -21 -57 -41 -150 -108 -187
-320 -82 -476 91 -137 264 -193 412 -134 34 14 42 14 45 3 10 -29 89 -103 135
-126 27 -14 71 -28 98 -31 l49 -6 0 -318 0 -319 -895 0 -896 0 -24 -25 c-33
-32 -33 -78 0 -110 l24 -25 2511 0 2511 0 24 25 c33 32 33 78 0 110 l-24 25
-416 0 -415 0 0 319 0 318 49 6 c27 3 71 17 98 31 46 23 125 97 135 126 3 11
11 11 45 -3 67 -27 132 -31 202 -13 239 61 344 328 211 534 -23 36 -58 73 -87
92 -26 19 -50 35 -53 37 -3 3 4 9 14 15 84 47 138 139 139 235 1 116 -81 227
-190 254 -42 11 -44 13 -36 38 36 118 -42 234 -159 235 -26 1 -47 3 -45 6 48
80 49 184 1 252 -32 46 -118 98 -163 98 -22 0 -31 9 -50 50 -45 94 -140 157
-254 168 -67 6 -67 6 -15 -58 32 -41 68 -135 68 -179 0 -26 8 -36 53 -64 96
-63 160 -147 198 -259 41 -122 21 -288 -49 -398 l-29 -46 39 -49 c55 -72 98
-182 111 -285 34 -274 -145 -547 -413 -628 -84 -25 -201 -36 -265 -23 -48 9
-51 8 -86 -24 l-37 -33 32 -30 c43 -41 108 -72 167 -79 l49 -6 0 -318 0 -319
-320 0 -320 0 0 399 0 398 73 5 c39 3 98 15 129 27 62 24 144 91 178 146 l21
33 54 -19 c116 -41 225 -34 342 20 177 83 279 300 229 486 -28 107 -110 216
-203 271 l-44 26 38 20 c58 31 101 77 134 144 49 99 41 222 -21 316 -47 72
-122 122 -200 134 -37 6 -41 9 -35 28 17 54 17 128 0 171 -31 82 -132 143
-219 133 -20 -2 -36 -4 -36 -3 0 0 11 22 25 49 34 67 35 160 1 232 -40 85
-142 154 -230 154 -27 0 -33 6 -50 46 -28 67 -107 148 -181 185 -74 36 -189
48 -266 26z"/>
<path d="M487 1974 c13 -48 8 -165 -10 -226 -21 -70 -89 -172 -201 -303 -114
-132 -135 -198 -102 -320 32 -122 122 -237 224 -289 28 -14 53 -26 55 -26 2 0
-7 22 -20 49 -17 35 -26 73 -30 128 -7 97 7 129 101 231 36 40 69 84 73 99 13
50 7 110 -16 148 -12 21 -20 39 -18 41 6 7 82 -49 130 -95 70 -67 93 -161 62
-256 -10 -30 51 43 74 88 l19 38 36 -38 c48 -51 85 -121 92 -176 8 -58 -24
-131 -90 -204 -26 -29 -45 -53 -41 -53 4 0 34 14 67 32 105 56 193 175 219
299 22 104 -13 260 -102 446 -45 93 -48 94 -69 8 -6 -27 -22 -72 -35 -100
l-23 -50 -1 85 c-3 260 -141 446 -347 467 l-55 6 8 -29z"/>
</g>
</svg>
`
};

/* ---------- Blocos de perguntas reutilizáveis ---------- */

const MATERIAL_EDIFICACOES = {
  label: "Tipo de Material Queimando",
  classes: [
    { nome: "Sólidos (Classe A)", itens: ["Sofás","Camas","Colchões","Tapetes","Cortinas","Guarda-roupas","Mesas","Cadeiras","Estantes","Livros","Roupas","Papéis","Quadros","Brinquedos","Utensílios"].sort((a,b)=>a.localeCompare(b,"pt-BR")) },
    { nome: "Líquidos Inflamáveis (Classe B)", itens: ["Gasolina","Álcool","Óleo Diesel","Querosene","Óleos lubrificantes","Tintas"].sort((a,b)=>a.localeCompare(b,"pt-BR")) },
    { nome: "Equipamentos Elétricos (Classe C)", itens: ["Televisores","Geladeiras","Fogões","Micro-ondas","Máquinas de lavar","Computadores","Ar-condicionado","Liquidificadores","Batedeiras","Airfryers","Sanduicheiras","Cafeteiras","Ventiladores"].sort((a,b)=>a.localeCompare(b,"pt-BR")) },
    { nome: "Metais Combustíveis (Classe D)", itens: ["Magnésio","Titânio","Lítio","Sódio","Potássio","Alumínio","Zinco"].sort((a,b)=>a.localeCompare(b,"pt-BR")) },
    { nome: "Óleos e Gorduras (Classe K)", itens: ["Óleo de soja","Óleo de canola","Óleo de milho","Óleo de girassol","Óleo de oliva","Azeite"].sort((a,b)=>a.localeCompare(b,"pt-BR")) },
  ]
};

const SITUACAO_INCENDIO = { key:"situacao", label:"Situação Encontrada", type:"checkbox",
  options:["Pequeno Incêndio","Médio Incêndio","Grande Incêndio","Propagando","Generalizado","Controlado","Extinto","Rescaldo"] };

const VITIMAS = { key:"vitimas", type:"vitimas" };

const SITUACAO_VITIMAS = { key:"situacaoVitimas", label:"Situação das Vítimas", type:"checkbox",
  options:["Em atendimento","Removida para o hospital","Removida por populares","Recusou atendimento"],
  extra:{ label:"Órgão responsável", options:["ASE","ABSR","SAMU","CONCESSIONÁRIA","OUTROS"] } };

const RECURSOS = { key:"recursos", type:"recursos", viaturaOptions:["ABSL","ABS","ASE","ABSR","AR","AT"] };

const OBSERVACOES = { key:"observacoes", label:"Observações", type:"texto" };

function perguntasPadrao(materialBlock, extras) {
  const base = [SITUACAO_INCENDIO];
  if (materialBlock) base.push({ key:"material", type:"material", ...materialBlock });
  if (extras) base.push(...extras);
  base.push(VITIMAS, SITUACAO_VITIMAS, RECURSOS, OBSERVACOES);
  return base;
}

const BLOQUEIO_VIA = { key:"bloqueio", label:"Existe Bloqueio da Via", type:"checkbox",
  options:["Não","Parcial","Total"] };

const SENTIDO_VIA = { key:"sentido", label:"Sentido", type:"checkbox",
  options:["Rio de Janeiro","Juiz de Fora","Três Rios","Paraíba do Sul","Levi Gasparian","Volta Redonda","Sapucaia"] };

const MATERIAL_TRANSPORTADO = { key:"materialTransportado", label:"Tipo de Material Transportado", type:"checkbox",
  options:["Carga Comum","Inflamável","Química","Explosiva"] };

const SITUACAO_ACIDENTE = { key:"situacao", label:"Situação Encontrada", type:"checkbox",
  options:["Vítima dentro do veículo","Vítima já fora do veículo","Vítima presa às ferragens","Vítima ejetada","Múltiplas vítimas","Veículo com GNV","Veículo Híbrido","Veículo 100% Elétrico","Carga Perigosa","Vazamento de carga"] };

function perguntasAcidenteVeicular() {
  return [SITUACAO_ACIDENTE, BLOQUEIO_VIA, SENTIDO_VIA, MATERIAL_TRANSPORTADO, VITIMAS, SITUACAO_VITIMAS, RECURSOS, OBSERVACOES];
}

const SITUACAO_VEGETACAO = SITUACAO_INCENDIO;

const INFO_VEGETACAO = { key:"infoVegetacao", label:"Informações Adicionais", type:"grupos",
  grupos:[
    { nome:"Propriedade", options:["Pública","Privada","Não identificada"] },
    { nome:"Zoneamento", options:["Urbano","Rural","Unidade de Conservação"] },
    { nome:"Tipo de Vegetação", options:["Rasteiro","Pasto","Arbusto","Árvore"] },
    { nome:"Tipo de Terreno", options:["Plano","Encosta","Aclive","Declive","Morro","Montanhoso","Irregular"] },
    { nome:"Condições do Vento", options:["Calmo","Moderado","Forte"] },
    { nome:"Apoio de Órgãos Externos", options:["Guarda Municipal","Defesa Civil Municipal","Brigadistas","Voluntários"] },
  ]};

const FERRAMENTAS_VEGETACAO = { key:"ferramentas", label:"Ferramentas", type:"contadores",
  options:["Abafador","Bomba Costal","Enxada","Pá","McLeod","Facão"] };

/* ---------- Estrutura de Tipos Agrupados ---------- */

const CATEGORIAS_OCORRENCIAS = [
  {
    categoria: "Acidente",
    tipos: [
      {
        id:"colisao", nome:"Colisão de veículos", missao:"ACIDENTE DE TRÂNSITO",
        quantidadeVeiculos:true,
        subtipos:["Automóvel","Bicicleta","Caminhão","Carroça","Moto","Moto elétrica","Muro","Poste","Trem","Van","Ônibus"].map(n=>({id:n,nome:n})),
        perguntas: perguntasAcidenteVeicular()
      },
      {
        id:"capotagem", nome:"Capotagem de Veículos", missao:"ACIDENTE DE TRÂNSITO",
        quantidadeVeiculos:true,
        subtipos:["Automóvel","Caminhão","Van","Ônibus"].map(n=>({id:n,nome:n})),
        perguntas: perguntasAcidenteVeicular()
      },
      {
        id:"queda", nome:"Queda de Veículos", missao:"ACIDENTE DE TRÂNSITO",
        quantidadeVeiculos:true,
        subtipos:["Automóvel","Caminhão","Van","Ônibus","Moto"].map(n=>({id:n,nome:n})),
        perguntas: perguntasAcidenteVeicular()
      }
    ]
  },
  {
    categoria: "Incêndio",
    tipos: [
      {
        id:"incendio_edif", nome:"Incêndio em Edificações", missao:"INCÊNDIO",
        quantidadeVeiculos:false,
        subtipos:[
          { id:"deposito", nome:"Depósitos/Galpões" },
          { id:"residencial", nome:"Edificações Residenciais", residencial:true },
          { id:"comercial", nome:"Estabelecimentos Comerciais" },
          { id:"industria", nome:"Indústrias" },
          { id:"restaurante", nome:"Restaurante/Bar" },
          { id:"publico", nome:"Órgãos Públicos" },
        ],
        perguntas: perguntasPadrao(MATERIAL_EDIFICACOES)
      },
      {
        id:"fogo_veiculo", nome:"Fogo em Veículos", missao:"INCÊNDIO",
        quantidadeVeiculos:true,
        subtipos:["Automóvel","Caminhão","Moto","Moto elétrica","Trem","Van","Ônibus"].map(n=>({id:n,nome:n})),
        perguntas: perguntasPadrao(null, [BLOQUEIO_VIA, SENTIDO_VIA, MATERIAL_TRANSPORTADO])
      },
      {
        id:"vegetacao", nome:"Fogo em Vegetação", missao:"INCÊNDIO",
        quantidadeVeiculos:false,
        subtipos:["Beira de Via/Rodovia","Mata Rural","Mata Urbana","Montanha/Floresta","Morro/Encosta","Terreno Baldio"].map(n=>({id:n,nome:n})),
        perguntas:[SITUACAO_VEGETACAO, INFO_VEGETACAO, FERRAMENTAS_VEGETACAO, VITIMAS, SITUACAO_VITIMAS, RECURSOS, OBSERVACOES]
      }
    ]
  }
];

CATEGORIAS_OCORRENCIAS.forEach(cat => {
  cat.tipos.forEach(t => {
    t.subtipos.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  });
});

function obterTodosTipos(){
  const todos = [];
  CATEGORIAS_OCORRENCIAS.forEach(cat => todos.push(...cat.tipos));
  return todos;
}

/* ---------- Estado ---------- */

const STORAGE_KEY = "informe_operacional_state_v1";

const state = {
  screen: 1,
  tipoId: null,
  subtipoIds: [],
  subtiposAdicionais: [],
  veiculosSelecionados: [],
  residencial: { tipoImovel:null, andar:0, pavimentos:0, pavimentoFogo:0, comodos:[] },
  respostas: {},
  endereco: "",
  coordenadas: "",
  geradoEm: null,
  buscandoGeo: false,
};

function salvarEstado(){
  try {
    const dataToSave = {
      screen: state.screen,
      tipoId: state.tipoId,
      subtipoIds: state.subtipoIds,
      subtiposAdicionais: state.subtiposAdicionais,
      veiculosSelecionados: state.veiculosSelecionados,
      residencial: state.residencial,
      respostas: state.respostas,
      endereco: state.endereco,
      coordenadas: state.coordenadas,
      geradoEm: state.geradoEm ? state.geradoEm.toISOString() : null
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch(e) {
    console.error("Erro ao salvar no localStorage", e);
  }
}

function carregarEstado(){
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){
      const parsed = JSON.parse(saved);
      state.screen = parsed.screen || 1;
      state.tipoId = parsed.tipoId || null;
      state.subtipoIds = parsed.subtipoIds || [];
      state.subtiposAdicionais = parsed.subtiposAdicionais || [];
      state.veiculosSelecionados = parsed.veiculosSelecionados || [];
      state.residencial = parsed.residencial || { tipoImovel:null, andar:0, pavimentos:0, pavimentoFogo:0, comodos:[] };
      state.respostas = parsed.respostas || {};
      state.endereco = parsed.endereco || "";
      state.coordenadas = parsed.coordenadas || "";
      state.geradoEm = parsed.geradoEm ? new Date(parsed.geradoEm) : null;
    }
  } catch(e) {
    console.error("Erro ao carregar do localStorage", e);
  }
}

function tipoAtual(){ return obterTodosTipos().find(t=>t.id===state.tipoId); }
function subtiposSelecionados(){ const t=tipoAtual(); return t ? t.subtipos.filter(s=>state.subtipoIds.includes(s.id)) : []; }
function algumSubtipoResidencial(){ return subtiposSelecionados().some(s=>s.residencial); }
function toggleSubtipo(id){
  const i = state.subtipoIds.indexOf(id);
  if(i>=0) state.subtipoIds.splice(i,1); else state.subtipoIds.push(id);
  salvarEstado();
}

function resetForm(){
  localStorage.removeItem(STORAGE_KEY);
  state.screen = 1;
  state.tipoId = null;
  state.subtipoIds = [];
  state.subtiposAdicionais = [];
  state.veiculosSelecionados = [];
  state.residencial = { tipoImovel:null, andar:0, pavimentos:0, pavimentoFogo:0, comodos:[] };
  state.respostas = {};
  state.geradoEm = null;
  state.endereco = "";
  state.coordenadas = "";
  render();
  window.scrollTo(0,0);
}

/* ---------- Coleta Automática de Geolocalização ---------- */

function capturarLocalizacaoAutomatica() {
  if (!("geolocation" in navigator)) {
    state.geoStatus = "erro";
    state.geoMensagem = "Seu navegador não suporta geolocalização.";
    refreshTicketPre();
    salvarEstado();
    return;
  }

  state.buscandoGeo = true;
  state.geoStatus = "buscando";
  render();

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      state.coordenadas = `${lat}, ${lon}`;
      state.geoStatus = "sucesso";

      try {
        const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
        if (resp.ok) {
          const data = await resp.json();
          if (data && data.address) {
            const a = data.address;
            const rua = a.road || a.pedestrian || a.suburb || "";
            const num = a.house_number ? `, ${a.house_number}` : "";
            const bairro = a.suburb || a.neighbourhood || "";
            const cidade = a.city || a.town || a.municipality || "";
            
            let endFmt = rua + num;
            if (bairro && !rua.includes(bairro)) endFmt += (endFmt ? " - " : "") + bairro;
            if (cidade) endFmt += (endFmt ? ", " : "") + cidade;

            state.endereco = endFmt || data.display_name;
          }
        }
      } catch(e) {
      } finally {
        state.buscandoGeo = false;
        salvarEstado();
        render();
      }
    },
    (err) => {
      state.buscandoGeo = false;
      state.geoStatus = "erro";
      if (err.code === err.PERMISSION_DENIED) {
        state.geoMensagem = "Permissão de localização negada. Ative o GPS nas configurações do dispositivo/navegador.";
      } else {
        state.geoMensagem = "Não foi possível obter a localização. Por favor, ative o GPS e tente novamente.";
      }
      salvarEstado();
      render();
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
  );
}

/* ---------- Helpers ---------- */

function getResp(key){
  if(!state.respostas[key]) state.respostas[key] = {};
  return state.respostas[key];
}

function toggleCheckbox(key, opt){
  const r = getResp(key);
  if(!r.opts) r.opts = [];
  const i = r.opts.indexOf(opt);
  if(i>=0) r.opts.splice(i,1); else r.opts.push(opt);
  salvarEstado();
}

function isChecked(key, opt){
  const r = state.respostas[key];
  return !!(r && r.opts && r.opts.includes(opt));
}

/* ---------- Componente de Navegação ---------- */

function renderNavButtons(onBack, onNext, nextText = "Avançar", nextDisabled = false) {
  const container = el("div", "nav-buttons");

  if (onBack) {
    const btnBack = el("button", "btn-blue", "Voltar");
    btnBack.type = "button";
    btnBack.onclick = () => {
      onBack();
      salvarEstado();
    };
    container.appendChild(btnBack);
  }

  if (onNext) {
    const btnNext = el("button", "btn-primary", nextText);
    btnNext.type = "button";
    btnNext.disabled = nextDisabled;
    btnNext.onclick = () => {
      onNext();
      salvarEstado();
    };
    container.appendChild(btnNext);
  }

  return container;
}

/* ---------- Render ---------- */

const app = document.getElementById("app");

function render(){
  app.innerHTML = "";
  const wrap = el("div","screen-wrap");
  if(state.screen===1) wrap.appendChild(renderTipoScreen());
  else if(state.screen===2) wrap.appendChild(renderSubtipoScreen());
  else if(state.screen===3) wrap.appendChild(renderPerguntasScreen());
  else if(state.screen===4) wrap.appendChild(renderInformeScreen());
  app.appendChild(wrap);
  salvarEstado();
}

function el(tag, className, text){
  const e = document.createElement(tag);
  if(className) e.className = className;
  if(text!==undefined) e.textContent = text;
  return e;
}

/* ---------- Tela 1: Tipo (Ajustada em formato de Cards em Grade de 2 colunas) ---------- */

function renderTipoScreen(){
  const c = el("div","screen");
  c.appendChild(el("h1","screen-title","Tipo de Ocorrência"));
  c.appendChild(el("p","screen-sub","Selecione o tipo de ocorrência atendida"));

  const grid = el("div", "tipo-grid-2col");

  // Ordenamento intercalado para formar exatamente a 1ª e 2ª colunas especificadas
  const itensTela1 = [
    { id: "colisao", nome: "Colisão de veículos" },
    { id: "incendio_edif", nome: "Incêndio em Edificações" },
    { id: "capotagem", nome: "Capotagem de Veículos" },
    { id: "fogo_veiculo", nome: "Fogo em Veículos" },
    { id: "queda", nome: "Queda de Veículos" },
    { id: "vegetacao", nome: "Fogo em Vegetação" }
  ];

  itensTela1.forEach(item => {
    const selected = state.tipoId === item.id;
    const card = el("button", "tipo-card" + (selected ? " selected" : ""));
    card.type = "button";

    const iconCircle = el("div", "tipo-card-icon");
    iconCircle.innerHTML = ICONES_TIPO[item.id] || "";

    const label = el("span", "tipo-card-label", item.nome);

    card.appendChild(iconCircle);
    card.appendChild(label);

    card.onclick = () => {
      state.tipoId = item.id;
      state.subtipoIds = [];
      state.subtiposAdicionais = [];
      state.veiculosSelecionados = [];
      state.respostas = {};
      state.screen = 2;
      salvarEstado();
      render();
      window.scrollTo(0, 0);
    };

    grid.appendChild(card);
  });

  c.appendChild(grid);
  return c;
}

/* ---------- Tela 2: Subtipo ---------- */

function renderSubtipoScreen(){
  const t = tipoAtual();
  const c = el("div","screen");

  c.appendChild(el("h1","screen-title", t.nome));
  c.appendChild(el("p","screen-sub", t.quantidadeVeiculos ? "Clique nos veículos para adicionar (cada clique conta +1)" : "Podendo ser escolhido mais de um subtipo"));

  if(t.quantidadeVeiculos){
    const yellowBox = el("div","vehicle-summary-box");
    
    const textContent = state.veiculosSelecionados.length > 0 
      ? state.veiculosSelecionados.join(" x ") 
      : "Nenhum veículo selecionado";

    const textEl = el("div", "vehicle-summary-text", textContent);
    yellowBox.appendChild(textEl);

    if (state.veiculosSelecionados.length > 0) {
      const btnClear = el("button", "btn-clear-vehicles", "Limpar");
      btnClear.type = "button";
      btnClear.onclick = () => {
        state.veiculosSelecionados = [];
        salvarEstado();
        render();
      };
      yellowBox.appendChild(btnClear);
    }

    c.appendChild(yellowBox);
  }

  const list = el("div","grid-2-list");
  
  t.subtipos.forEach(s=>{
    if(t.quantidadeVeiculos){
      const count = state.veiculosSelecionados.filter(item => item === s.nome).length;
      const btn = el("button","opt-row"+(count > 0 ? " selected" : ""));
      btn.type = "button";
      btn.appendChild(el("span","btn-label-clean", s.nome));
      if(count > 0){
        btn.appendChild(el("span","count-badge", `+${count}`));
      }
      btn.onclick = ()=>{
        state.veiculosSelecionados.push(s.nome);
        salvarEstado();
        render();
      };
      list.appendChild(btn);
    } else {
      const selected = state.subtipoIds.includes(s.id);
      const btn = el("button","opt-row"+(selected?" selected":""));
      btn.type = "button";
      btn.appendChild(el("span","btn-label-clean", s.nome));
      btn.onclick = ()=>{ toggleSubtipo(s.id); render(); };
      list.appendChild(btn);
    }
  });

  if (t.quantidadeVeiculos) {
    const standardNames = t.subtipos.map(s => s.nome);
    const customVehicles = [...new Set(state.veiculosSelecionados.filter(v => !standardNames.includes(v)))];
    
    customVehicles.forEach(customName => {
      const count = state.veiculosSelecionados.filter(item => item === customName).length;
      const btn = el("button","opt-row selected");
      btn.type = "button";
      btn.appendChild(el("span","btn-label-clean", customName));
      btn.appendChild(el("span","count-badge", `+${count}`));
      btn.onclick = ()=>{
        state.veiculosSelecionados.push(customName);
        salvarEstado();
        render();
      };
      list.appendChild(btn);
    });
  } else {
    state.subtiposAdicionais.forEach((customName, idx) => {
      const btn = el("button","opt-row selected");
      btn.type = "button";
      btn.appendChild(el("span","btn-label-clean", customName));
      btn.onclick = ()=>{
        state.subtiposAdicionais.splice(idx, 1);
        salvarEstado();
        render();
      };
      list.appendChild(btn);
    });
  }

  c.appendChild(list);

  const fieldOutros = el("div", "field-outros");
  fieldOutros.appendChild(el("div", "field-label", "Outros (digite e clique em OK para adicionar)"));
  
  const outrosRow = el("div", "outros-row");
  
  const inputOutros = el("input", "input-outros");
  inputOutros.type = "text";
  inputOutros.placeholder = "Digite outra opção...";
  inputOutros.id = "input-custom-subtipo";
  
  const btnOk = el("button", "btn-ok", "OK");
  btnOk.type = "button";
  
  const adicionarCustomizado = () => {
    const val = inputOutros.value.trim();
    if (val) {
      if (t.quantidadeVeiculos) {
        state.veiculosSelecionados.push(val);
      } else {
        if (!state.subtiposAdicionais.includes(val)) {
          state.subtiposAdicionais.push(val);
        }
      }
      salvarEstado();
      render();
    }
  };

  btnOk.onclick = adicionarCustomizado;
  inputOutros.onkeypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      adicionarCustomizado();
    }
  };

  outrosRow.appendChild(inputOutros);
  outrosRow.appendChild(btnOk);
  fieldOutros.appendChild(outrosRow);
  c.appendChild(fieldOutros);

  if(algumSubtipoResidencial()){
    c.appendChild(renderResidencialDetalhes());
  }

  const isNextDisabled = t.quantidadeVeiculos
    ? state.veiculosSelecionados.length === 0
    : (state.subtipoIds.length === 0 && state.subtiposAdicionais.length === 0);

  const nav = renderNavButtons(
    () => { state.screen = 1; render(); window.scrollTo(0, 0); },
    () => { state.screen = 3; render(); window.scrollTo(0, 0); },
    "Avançar",
    isNextDisabled
  );
  c.appendChild(nav);

  return c;
}

function renderResidencialDetalhes(){
  const box = el("div","subpanel");
  box.appendChild(el("h3","subpanel-title","Detalhes da Edificação Residencial"));

  const tipoRow = el("div","chip-row");
  ["Casa","Apartamento"].forEach(op=>{
    const b = el("button","chip small"+(state.residencial.tipoImovel===op?" selected":""),op);
    b.type="button";
    b.onclick=()=>{state.residencial.tipoImovel=op; salvarEstado(); render();};
    tipoRow.appendChild(b);
  });
  box.appendChild(labeledField("Tipo de Imóvel", tipoRow));

  box.appendChild(counterField("Andar", state.residencial.andar, v=>{state.residencial.andar=v; salvarEstado(); render();}));
  box.appendChild(counterField("Pavimentos", state.residencial.pavimentos, v=>{state.residencial.pavimentos=v; salvarEstado(); render();}));
  box.appendChild(counterField("Fogo em qual Pavimento", state.residencial.pavimentoFogo, v=>{state.residencial.pavimentoFogo=v; salvarEstado(); render();}));

  const comodoRow = el("div","chip-row wrap");
  ["Sala","Cozinha","Quarto","Banheiro","Área externa"].forEach(op=>{
    const active = state.residencial.comodos.includes(op);
    const b = el("button","chip small"+(active?" selected":""),op);
    b.type="button";
    b.onclick=()=>{
      const i = state.residencial.comodos.indexOf(op);
      if(i>=0) state.residencial.comodos.splice(i,1); else state.residencial.comodos.push(op);
      salvarEstado();
      render();
    };
    comodoRow.appendChild(b);
  });
  box.appendChild(labeledField("Fogo em qual Cômodo", comodoRow));

  return box;
}

/* ---------- Campos ---------- */

function labeledField(label, node){
  const f = el("div","field");
  f.appendChild(el("div","field-label",label));
  f.appendChild(node);
  return f;
}

function counterField(label, value, onChange){
  const row = el("div","counter-row");
  row.appendChild(el("div","field-label",label));
  const ctrl = el("div","counter");
  const minus = el("button","counter-btn","−"); minus.type="button";
  const val = el("span","counter-val", String(value).padStart(2,"0"));
  const plus = el("button","counter-btn","+"); plus.type="button";
  minus.onclick=()=>onChange(Math.max(0,value-1));
  plus.onclick=()=>onChange(value+1);
  ctrl.append(minus,val,plus);
  row.appendChild(ctrl);
  return row;
}

/* ---------- Tela 3: Perguntas ---------- */

function renderPerguntasScreen(){
  const t = tipoAtual();
  const c = el("div","screen");
  c.appendChild(el("h1","screen-title","Detalhes da Ocorrência"));
  
  let subtipoText = "";
  if(t.quantidadeVeiculos){
    subtipoText = state.veiculosSelecionados.join(" x ");
  } else {
    let items = subtiposSelecionados().map(s=>s.nome).concat(state.subtiposAdicionais);
    subtipoText = items.join(", ");
  }

  c.appendChild(el("p","screen-sub", t.nome + (subtipoText ? " — " + subtipoText : "")));

  t.perguntas.forEach(p=>{
    c.appendChild(renderPergunta(p));
  });

  const nav = renderNavButtons(
    () => { state.screen = 2; render(); window.scrollTo(0, 0); },
    () => { 
      if(!state.geradoEm) state.geradoEm = new Date(); 
      if(!state.coordenadas) capturarLocalizacaoAutomatica();
      state.screen = 4; 
      salvarEstado();
      render(); 
      window.scrollTo(0,0); 
    },
    "GERAR INFORME OPERACIONAL"
  );
  c.appendChild(nav);

  return c;
}

function renderPergunta(p){
  const box = el("div","subpanel");
  
  if(p.type==="checkbox") renderCheckboxBlock(p, box);
  else if(p.type==="material") renderMaterialBlock(p, box);
  else if(p.type==="grupos") renderGruposBlock(p, box);
  else if(p.type==="contadores") renderContadoresBlock(p, box);
  else if(p.type==="vitimas") renderVitimasBlock(box);
  else if(p.type==="recursos") renderRecursosBlock(p, box);
  else if(p.type==="texto") renderTextoBlock(p, box);

  if (p.type !== "texto") {
    const key = p.key || (p.type === "vitimas" ? "vitimas" : p.type === "recursos" ? "recursos" : "bloco");
    const r = getResp(key);
    const inputBlockText = el("input", "text-input mt-2");
    inputBlockText.type = "text";
    inputBlockText.placeholder = "Observação / Detalhes deste bloco...";
    inputBlockText.value = r.observacao || "";
    inputBlockText.oninput = (e) => { 
      r.observacao = e.target.value; 
      salvarEstado();
    };
    box.appendChild(labeledField("Observações do Bloco", inputBlockText));
  }

  return box;
}

function severityColor(op){
  if(op==="Pequeno Incêndio") return "var(--green)";
  if(op==="Médio Incêndio") return "var(--amber)";
  if(op==="Grande Incêndio") return "var(--red)";
  return null;
}

function gridOptionsNoIcons(options, isSelectedFn, onToggle, colorFn){
  const grid = el("div","grid-3-list");
  options.forEach(op=>{
    const selected = isSelectedFn(op);
    const b = el("button","grid-btn"+(selected?" selected":""));
    b.type="button";
    const span = el("span","grid-btn-text", op);
    if(colorFn){
      const c = colorFn(op);
      if(c) span.style.color = c;
    }
    b.appendChild(span);
    b.onclick=()=>{ 
      onToggle(op); 
      salvarEstado();
      render(); 
    };
    grid.appendChild(b);
  });
  return grid;
}

function renderCheckboxBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const cf = p.key==="situacao" ? severityColor : null;
  box.appendChild(gridOptionsNoIcons(p.options, op=>isChecked(p.key,op), op=>toggleCheckbox(p.key,op), cf));
  if(p.extra){
    box.appendChild(el("div","field-label mt", p.extra.label));
    const key = p.key+"_extra";
    box.appendChild(gridOptionsNoIcons(p.extra.options, op=>isChecked(key,op), op=>toggleCheckbox(key,op)));
  }
  return box;
}

function renderMaterialBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  if(!r.classes) r.classes = {};
  p.classes.forEach(cl=>{
    const active = Object.prototype.hasOwnProperty.call(r.classes, cl.nome);
    const clBox = el("div","material-class-block");
    const b = el("button","grid-btn full-width"+(active?" selected":""));
    b.type="button";
    b.appendChild(el("span","grid-btn-text", cl.nome));
    b.onclick=()=>{
      if(active) delete r.classes[cl.nome];
      else r.classes[cl.nome] = [];
      salvarEstado();
      render();
    };
    clBox.appendChild(b);
    if(active){
      const itemsBox = el("div","material-items");
      itemsBox.appendChild(gridOptionsNoIcons(cl.itens,
        it=>r.classes[cl.nome].includes(it),
        it=>{
          const arr = r.classes[cl.nome];
          const i = arr.indexOf(it);
          if(i>=0) arr.splice(i,1); else arr.push(it);
          salvarEstado();
        }));
      clBox.appendChild(itemsBox);
    }
    box.appendChild(clBox);
  });
  return box;
}

function renderGruposBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  if(!r.groups) r.groups = {};
  p.grupos.forEach(g=>{
    box.appendChild(el("div","field-label mt", g.nome));
    if(!r.groups[g.nome]) r.groups[g.nome] = [];
    box.appendChild(gridOptionsNoIcons(g.options,
      op=>r.groups[g.nome].includes(op),
      op=>{
        const arr = r.groups[g.nome];
        const i = arr.indexOf(op);
        if(i>=0) arr.splice(i,1); else arr.push(op);
        salvarEstado();
      }));
  });
  return box;
}

function renderContadoresBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  if(!r.counts) r.counts = {};
  p.options.forEach(op=>{
    box.appendChild(counterField(op, r.counts[op]||0, v=>{
      r.counts[op]=v; 
      salvarEstado();
      render();
    }));
  });
  return box;
}

function counterFieldColored(label, color, value, onChange){
  const row = counterField(label, value, onChange);
  const labelEl = row.querySelector(".field-label");
  if(labelEl && color) labelEl.style.color = color;
  return row;
}

function renderVitimasBlock(box){
  box.appendChild(el("h3","subpanel-title","Vítimas"));
  const r = getResp("vitimas");
  const semBtn = el("button","grid-btn full-width"+(r.sem?" selected":""));
  semBtn.type="button";
  semBtn.appendChild(el("span","grid-btn-text","Sem vítimas"));
  semBtn.onclick=()=>{ 
    r.sem=!r.sem; 
    salvarEstado();
    render(); 
  };
  box.appendChild(semBtn);
  if(!r.sem){
    box.appendChild(counterField("Quantidade de Vítimas", r.total||0, v=>{r.total=v; salvarEstado(); render();}));
    box.appendChild(counterFieldColored("Verdes", "var(--green)", r.verde||0, v=>{r.verde=v; salvarEstado(); render();}));
    box.appendChild(counterFieldColored("Amarelas", "var(--amber)", r.amarelo||0, v=>{r.amarelo=v; salvarEstado(); render();}));
    box.appendChild(counterFieldColored("Vermelhas", "var(--red)", r.vermelho||0, v=>{r.vermelho=v; salvarEstado(); render();}));
    box.appendChild(counterFieldColored("Cinzas", "var(--text-dim)", r.cinza||0, v=>{r.cinza=v; salvarEstado(); render();}));
  }
  return box;
}

function renderRecursosBlock(p, box){
  box.appendChild(el("h3","subpanel-title","Recursos"));
  const r = getResp("recursos");
  if (!r.tipos) r.tipos = [];

  const qtdViaturas = r.tipos.length;
  r.viaturas = qtdViaturas;

  const infoCount = el("div", "field-label", `Viaturas Empregadas: ${qtdViaturas}`);
  infoCount.style.fontSize = "14px";
  infoCount.style.fontWeight = "bold";
  infoCount.style.color = "var(--amber)";
  infoCount.style.marginBottom = "12px";
  box.appendChild(infoCount);

  box.appendChild(el("div","field-label mt","Tipo de Viatura"));
  box.appendChild(gridOptionsNoIcons(p.viaturaOptions,
    op=>r.tipos.includes(op),
    op=>{
      const i=r.tipos.indexOf(op);
      if(i>=0) r.tipos.splice(i,1); else r.tipos.push(op);
      r.viaturas = r.tipos.length;
      salvarEstado();
    }));
  box.appendChild(counterField("Efetivo empregado", r.efetivo||0, v=>{r.efetivo=v; salvarEstado(); render();}));
  return box;
}

function renderTextoBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  const ta = el("textarea","text-area");
  ta.rows = 4;
  ta.placeholder = "Digite observações adicionais...";
  ta.value = r.texto || "";
  ta.oninput = (e)=>{ 
    r.texto = e.target.value; 
    salvarEstado();
  };
  box.appendChild(ta);
  return box;
}

/* ---------- Geração do Informe ---------- */

const SEPARADOR = "--------------------------------";

function pad2(n){ return String(n).padStart(2,"0"); }

function gerarTextoInforme(){
  const t = tipoAtual();
  if(!t) return "";
  const subs = subtiposSelecionados();
  const blocos = [];

  const cab = ["*AVALIAÇÃO DA CENA*"];
  const agora = state.geradoEm || new Date();
  cab.push("*DATA:* " + agora.toLocaleDateString("pt-BR"));
  cab.push("*HORA:* " + agora.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}) + " (coleta das informações)");
  if(state.coordenadas.trim()) cab.push("*COORDENADAS:* " + state.coordenadas.trim());
  if(state.endereco.trim()) cab.push("*ENDEREÇO:* " + state.endereco.trim());
  cab.push("*MISSÃO:* " + (t.missao || ""));
  blocos.push(cab);

  const loc = [];
  loc.push("TIPO: " + t.nome.toUpperCase());

  if(t.quantidadeVeiculos){
    if(state.veiculosSelecionados.length > 0){
      loc.push("SUBTIPO: " + state.veiculosSelecionados.join(" x "));
    }
  } else {
    let listaSubtipos = subs.map(s => s.nome).concat(state.subtiposAdicionais);
    if(listaSubtipos.length > 0){
      loc.push("SUBTIPO: " + listaSubtipos.join(", "));
    }
  }

  if(subs.some(s=>s.residencial)){
    const rd = state.residencial;
    if(rd.tipoImovel) loc.push("Edificação: " + rd.tipoImovel);
    if(rd.andar>0) loc.push("Andar: " + rd.andar);
    if(rd.pavimentos>0) loc.push("Pavimentos: " + pad2(rd.pavimentos));
    if(rd.pavimentoFogo>0) loc.push("Fogo no pavimento: " + pad2(rd.pavimentoFogo));
    if(rd.comodos.length) loc.push("Cômodo(s) com fogo: " + rd.comodos.join(", "));
  }
  blocos.push(loc);

  const sit = [];
  t.perguntas.forEach(p=>{
    const r = state.respostas[p.key];
    if(!r) return;
    let linhaMsg = "";
    
    if(p.type==="checkbox" && p.key==="situacao" && r.opts && r.opts.length){
      linhaMsg = "SITUAÇÃO ENCONTRADA: " + r.opts.join(", ");
    } else if(p.type==="material" && r.classes){
      const partes = Object.entries(r.classes)
        .filter(([k,itens])=>itens.length>0)
        .map(([k,itens])=>k+" — "+itens.join(", "));
      if(partes.length) linhaMsg = "MATERIAL QUEIMANDO: " + partes.join(" | ");
    } else if(p.type==="checkbox" && p.key==="bloqueio" && r.opts && r.opts.length){
      linhaMsg = "BLOQUEIO DA VIA: " + r.opts.join(", ");
    } else if(p.type==="checkbox" && p.key==="sentido" && r.opts && r.opts.length){
      linhaMsg = "SENTIDO: " + r.opts.join(", ");
    } else if(p.type==="checkbox" && p.key==="materialTransportado" && r.opts && r.opts.length){
      linhaMsg = "MATERIAL TRANSPORTADO: " + r.opts.join(", ");
    } else if(p.type==="grupos"){
      const partes = p.grupos
        .map(g=>({nome:g.nome, valores:(r.groups && r.groups[g.nome]) || []}))
        .filter(x=>x.valores.length>0)
        .map(x=>x.nome + ": " + x.valores.join(", "));
      if(partes.length) {
        linhaMsg = "INFORMAÇÕES ADICIONAIS:\n" + partes.join("\n");
      }
    } else if(p.type==="contadores" && r.counts){
      const entries = Object.entries(r.counts).filter(([k,v])=>v>0);
      if(entries.length) {
        linhaMsg = "FERRAMENTAS:\n" + entries.map(([k,v])=> k + " (" + v + ")").join("\n");
      }
    }

    const ignorarNoLoop = ["vitimas", "situacaoVitimas", "recursos", "observacoes"];
    if (!ignorarNoLoop.includes(p.key)) {
      const temObs = r.observacao && r.observacao.trim();
      
      if(linhaMsg) {
        if(temObs) {
          linhaMsg += " | " + r.observacao.trim();
        }
        sit.push(linhaMsg);
      } 
      else if (temObs) {
        let fallbackLabel = p.label ? p.label.toUpperCase() : p.key.toUpperCase();
        sit.push(fallbackLabel + ": " + r.observacao.trim());
      }
    }
  });
  blocos.push(sit);

  const vit = [];
  const rv = state.respostas["vitimas"];
  if(rv){
    let temObs = rv.observacao && rv.observacao.trim();
    if(rv.sem){
      vit.push("VÍTIMAS: Sem vítimas" + (temObs ? " | " + rv.observacao.trim() : ""));
    } else {
      const partes = [];
      if(rv.total>0) partes.push(String(rv.total));
      if(rv.verde>0) partes.push("Verdes: "+rv.verde);
      if(rv.amarelo>0) partes.push("Amarelas: "+rv.amarelo);
      if(rv.vermelho>0) partes.push("Vermelhas: "+rv.vermelho);
      if(rv.cinza>0) partes.push("Cinzas: "+rv.cinza);
      
      let linhaVit = "";
      if(partes.length) linhaVit = "VÍTIMAS: " + partes.join(" | ");
      
      if(temObs){
         if(linhaVit) linhaVit += " | " + rv.observacao.trim();
         else linhaVit = "VÍTIMAS: " + rv.observacao.trim();
      }
      if(linhaVit) vit.push(linhaVit);
    }
  }

  const rsv = state.respostas["situacaoVitimas"];
  const rsvExtra = state.respostas["situacaoVitimas_extra"];
  let linhaSvt = "";
  let temObsSvt = rsv && rsv.observacao && rsv.observacao.trim();

  if((rsv && rsv.opts && rsv.opts.length) || (rsvExtra && rsvExtra.opts && rsvExtra.opts.length)){
    linhaSvt = "SITUAÇÃO DAS VÍTIMAS: " + (rsv&&rsv.opts? rsv.opts.join(", ") : "");
    if(rsvExtra && rsvExtra.opts && rsvExtra.opts.length) linhaSvt += " (" + rsvExtra.opts.join(", ") + ")";
  }
  
  if(temObsSvt) {
     if(linhaSvt) linhaSvt += " | " + rsv.observacao.trim();
     else linhaSvt = "SITUAÇÃO DAS VÍTIMAS: " + rsv.observacao.trim();
  }
  if(linhaSvt) vit.push(linhaSvt);
  blocos.push(vit);

  const rec = [];
  const rr = state.respostas["recursos"];
  if(rr){
    const partes = [];
    const countVtrs = (rr.tipos && rr.tipos.length) ? rr.tipos.length : (rr.viaturas || 0);
    if(countVtrs>0) partes.push("Vtrs: " + countVtrs + (rr.tipos&&rr.tipos.length? " ("+rr.tipos.join(", ")+")":""));
    if(rr.efetivo>0) partes.push("Efetivo: " + rr.efetivo);
    
    let linhaRec = "";
    if(partes.length) linhaRec = "RECURSOS: " + partes.join(" | ");
    
    let temObsRec = rr.observacao && rr.observacao.trim();
    if(temObsRec){
       if(linhaRec) linhaRec += " | " + rr.observacao.trim();
       else linhaRec = "RECURSOS: " + rr.observacao.trim();
    }
    if(linhaRec) rec.push(linhaRec);
  }
  blocos.push(rec);

  const obs = [];
  const ro = state.respostas["observacoes"];
  if(ro && ro.texto && ro.texto.trim()) obs.push("OBSERVAÇÕES: " + ro.texto.trim());
  blocos.push(obs);

  const naoVazios = blocos.filter(b=>b.length>0);
  return naoVazios.map(b=>b.join("\n")).join("\n"+SEPARADOR+"\n");
}

/* ---------- Tela 4: Informe ---------- */

let ticketPreRef = null;

function refreshTicketPre(){
  if(ticketPreRef) ticketPreRef.textContent = gerarTextoInforme();
}

function renderInformeScreen(){
  const c = el("div","screen");
  c.appendChild(el("h1","screen-title","Informe Operacional"));

  if(!state.coordenadas) {
    const alertBox = el("div", "geo-alert-box");
    
    const title = el("div", "geo-alert-title", "📍 Localização não capturada");
    const desc = el("div", "geo-alert-desc", 
      state.geoMensagem || "Por favor, ligue a Localização (GPS) do seu aparelho e permita o acesso ao navegador para incluir endereço e coordenadas no informe."
    );
    
    const btnRetry = el("button", "btn-geo", state.buscandoGeo ? "Buscando localização..." : "Ligar/Tentar Obter Localização");
    btnRetry.type = "button";
    btnRetry.disabled = state.buscandoGeo;
    btnRetry.onclick = () => {
      capturarLocalizacaoAutomatica();
    };

    alertBox.append(title, desc, btnRetry);
    c.appendChild(alertBox);
  }

  const ticket = el("div","ticket");
  const pre = el("pre","ticket-text");
  pre.textContent = gerarTextoInforme();
  ticketPreRef = pre;
  ticket.appendChild(pre);
  c.appendChild(ticket);

  const actions = el("div","action-grid");

  const btnWpp = el("button","btn-action btn-whatsapp","ENVIAR PELO WHATSAPP");
  btnWpp.type="button";
  btnWpp.onclick = ()=>{
    const url = "https://wa.me/?text=" + encodeURIComponent(gerarTextoInforme());
    window.open(url, "_blank");
  };

  const btnCopy = el("button","btn-action btn-copy","COPIAR TEXTO");
  btnCopy.type="button";
  btnCopy.onclick = async ()=>{
    const texto = gerarTextoInforme();
    try{
      await navigator.clipboard.writeText(texto);
      btnCopy.textContent = "Copiado!";
      setTimeout(()=>{btnCopy.textContent="COPIAR TEXTO";}, 1800);
    }catch(e){
      const ta = document.createElement("textarea");
      ta.value = texto;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btnCopy.textContent = "Copiado!";
      setTimeout(()=>{btnCopy.textContent="COPIAR TEXTO";}, 1800);
    }
  };

  const btnReset = el("button","btn-action btn-reset","ZERAR FORMULÁRIO");
  btnReset.type="button";
  btnReset.onclick = ()=>{
    if(confirm("Deseja realmente zerar o formulário? Todos os dados serão perdidos.")) resetForm();
  };

  actions.append(btnWpp, btnCopy, btnReset);
  c.appendChild(actions);

  const nav = renderNavButtons(
    () => { state.screen = 3; render(); window.scrollTo(0, 0); },
    null
  );
  c.appendChild(nav);

  return c;
}

/* ---------- Inicialização ---------- */

carregarEstado();
render();

if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
  });
}