// Location of circle - allow the shape to move upwards from the center
let x, y;
function setup() {
  createCanvas(1920, 1080);
  x = width / 2;
  y = height;
}

// Create black background 
function draw() {
  background(0);

// Create circle and size ratio. Make moving circle a similar size. 
 stroke(255, 255, 255) 
 circle(width / 2, height / 2,width / 10); 
 ellipse(x, y, 190,190);
  

  
 x = x + random(-1, 1);
 y = y - 1;
  
  
 // restart program 
 if (y < 0) {
    y = height;
  }
  
  //Create lines within multiples of ten.Each group of lines should form   what appears to be even rays of sunlight. 
 // Lines begin upwards from the center of the canvas 

  line(0,0,width,height);
  line(80,0, width, height);
  line(60,0, width, height);
  line(40,0, width, height);
  line(20, 0, width, height);
  
  line(100,0, width, height);
  line(120,0, width, height);
  line(140,0, width, height);
  line(160,0, width, height);
  line(180,0, width, height);

  
  line(200,0, width, height);
  line(210, 0, width, height);
  line(220,0, width, height);
  line(230,0, width, height);
  line(240,0, width, height);
  line(250, 0, width, height);
  line(260,0, width, height);
  line(270,0, width, height);
  line(280,0, width, height);
  line(290, 0, width, height);
  line(300,0, width, height);
  line(310,0, width, height);
  line(320,0, width, height);
  line(330, 0, width, height);
  line(340,0, width, height);
  line(350,0, width, height);
  line(360,0, width, height);
  
  line(370,0, width, height);
  line(380,0, width, height);
  line(390,0, width, height);
  line(400, 0, width, height);
  line(410,0, width, height);
  line(420,0, width, height);
  line(430,0, width, height);
  line(440,0, width, height);
  line(450,0, width, height);
  line(460,0, width, height);
  line(470, 0, width, height);
  line(480,0, width, height);
  line(490,0, width, height);
  line(500,0, width, height);
  
  line(510,0, width, height);
  line(520,0, width, height);
  line(530,0, width, height);
  line(540,0, width, height);
  line(550,0, width, height);
  line(560,0, width, height);
  line(570,0, width, height);
  line(580,0, width, height);
  line(590,0, width, height);
  line(600,0, width, height);
  
  line(610,0, width, height);
  line(620,0, width, height);
  line(630,0, width, height);
  line(640,0, width, height);
  line(660,0, width, height);
  line(680,0, width, height);
  line(700,0, width, height);
  line(720,0, width, height);
  line(740,0, width, height);
  line(760,0, width, height);
  line(780,0, width, height);
  line(800,0, width, height);
  
  
  // remove every other (odd) number
  // Lines begin to move downwards from the center of the canvas 
  line(-20, 0, width, height);
  line(-40, 0, width, height);
  line(-60, 0, width, height);
  line(-80, 0, width, height);
  line(-100, 0, width, height);
  
  // remove every other (odd) number
  line(-120,0, width, height);
  line(-140,0, width, height);
  line(-160,0, width, height); 
  line(-180,0, width, height);
  line(-200,0, width, height);
  
  // remove every other (odd) number
  line(-220,0, width, height);
  line(-240,0, width, height);
  line(-260,0, width, height);
  line(-280,0, width, height);
  line(-300, 0, width, height);
  
  line(-310, 0, width, height);
  line(-320,0, width, height);
  line(-330, 0, width, height);
  line(-340,0, width, height);
  line(-350, 0, width, height);
  line(-360,0, width, height);
  line(-370,0, width, height);
  line(-380,0, width, height);
  line(-390,0, width, height);
  
  line(-400, 0, width, height);
  line(-410,0, width, height);
  line(-420,0, width, height);
  line(-430,0, width, height);
  line(-440,0, width, height);
  line(-450,0, width, height);
  line(-460,0, width, height);
  line(-470,0, width, height);
  line(-480,0, width, height);
  line(-490,0, width, height);
  
  line(-500,0, width, height);
  line(-510, 0, width, height);
  line(-520,0, width, height);
  line(-530, 0, width, height);
  line(-540,0, width, height);
  line(-550, 0, width, height);
  line(-560,0, width, height);
  line(-570, 0, width, height);
  line(-580,0, width, height);
  line(-590, 0, width, height);
  line(-600,0, width, height);
  
  line(-610,0, width, height);
  line(-620, 0, width, height);
  line(-630,0, width, height);
  line(-640, 0, width, height);
  line(-650,0, width, height);
  line(-660, 0, width, height);
  line(-670,0, width, height);
  line(-680, 0, width, height);
  line(-690,0, width, height);
  line(-700, 0, width, height);

  line(-710,0, width, height);
  line(-720, 0, width, height);
  line(-730,0, width, height);
  line(-740, 0, width, height);
  line(-750,0, width, height);
  line(-760, 0, width, height);
  line(-770,0, width, height);
  line(-780, 0, width, height);
  line(-790,0, width, height);
  line(-800, 0, width, height);
  

  
  line(-810,0, width, height);
  line(-820, 0, width, height);
  line(-830,0, width, height);
  line(-840, 0, width, height);
  line(-850,0, width, height);
  line(-860, 0, width, height);
  line(-870,0, width, height);
  line(-880, 0, width, height);
  line(-890,0, width, height);
  line(-900, 0, width, height);
  
  line(-910,0, width, height);
  line(-920, 0, width, height);
  line(-930,0, width, height);
  line(-940, 0, width, height);
  line(-950,0, width, height);
  line(-960, 0, width, height);
  line(-970,0, width, height);
  line(-980, 0, width, height);
  line(-990,0, width, height);
  line(-1000, 0, width, height);
  
  
  line(-1010,0, width, height);
  line(-1020, 0, width, height);
  line(-1030,0, width, height);
  line(-1040, 0, width, height);
  line(-1050,0, width, height);
  line(-1060, 0, width, height);
  line(-1070,0, width, height);
  line(-1080,0, width, height); 
  line(-1090, 0, width, height);
  
  line(-1100,0, width, height);
  line(-1110, 0, width, height);
  line(-1120,0, width, height);
  line(-1130, 0, width, height);
  line(-1140,0, width, height);
  line(-1150, 0, width, height);
  line(-1160,0, width, height);
  line(-1170,0, width, height); 
  line(-1180, 0, width, height);
  line(-1190, 0, width, height);
  
  line(-1200,0, width, height);
  line(-1210, 0, width, height);
  line(-1220,0, width, height);
  line(-1230, 0, width, height);
  line(-1240,0, width, height);
  line(-1250, 0, width, height);
  line(-1260,0, width, height);
  line(-1270,0, width, height); 
  line(-1280, 0, width, height);
  line(-1290, 0, width, height);
  
  line(-1300,0, width, height);
  line(-1310, 0, width, height);
  line(-1320,0, width, height);
  line(-1330, 0, width, height);
  line(-1340,0, width, height);
  line(-1350, 0, width, height);
  line(-1360,0, width, height);
  line(-1370,0, width, height); 
  line(-1380, 0, width, height);
  line(-1390, 0, width, height);
  
  line(-1400,0, width, height);
  line(-1410, 0, width, height);
  line(-1420,0, width, height);
  line(-1430, 0, width, height);
  line(-1440,0, width, height);
  line(-1450, 0, width, height);
  line(-1460,0, width, height);
  line(-1470,0, width, height); 
  line(-1480, 0, width, height);
  line(-1490, 0, width, height);
  
  line(-1500,0, width, height);
  line(-1510, 0, width, height);
  line(-1520,0, width, height);
  line(-1530, 0, width, height);
  line(-1540,0, width, height);
  line(-1550, 0, width, height);
  line(-1560,0, width, height);
  line(-1570,0, width, height); 
  line(-1580, 0, width, height);
  line(-1590, 0, width, height);
  
  line(-1600,0, width, height);
  line(-1610, 0, width, height);
  line(-1620,0, width, height);
  line(-1630, 0, width, height);
  line(-1640,0, width, height);
  line(-1650, 0, width, height);
  line(-1660,0, width, height);
  line(-1670,0, width, height); 
  line(-1680, 0, width, height);
  line(-1690, 0, width, height);
  
  line(-1700,0, width, height);
  line(-1710, 0, width, height);
  line(-1720,0, width, height);
  line(-1730, 0, width, height);
  line(-1740,0, width, height);
  line(-1750, 0, width, height);
  line(-1760,0, width, height);
  line(-1770,0, width, height); 
  line(-1780, 0, width, height);
  line(-1790, 0, width, height);
  
  line(-1800,0, width, height);
  line(-1810, 0, width, height);
  line(-1820,0, width, height);
  line(-1830, 0, width, height);
  line(-1840,0, width, height);
  line(-1850, 0, width, height);
  line(-1860,0, width, height);
  line(-1870,0, width, height); 
  line(-1880, 0, width, height);
  line(-1890, 0, width, height);
  
  line(-1900,0, width, height);
  line(-1910, 0, width, height);
  line(-1920,0, width, height);
  line(-1930, 0, width, height);
  line(-1940,0, width, height);
  line(-1950, 0, width, height);
  line(-1960,0, width, height);
  line(-1970,0, width, height); 
  line(-1980, 0, width, height);
  line(-1990, 0, width, height);
  
  line(-2000,0, width, height);
  line(-2010,0, width, height);
  line(-2020, 0, width, height);
  line(-2030,0, width, height);
  line(-2040,0, width, height);
  line(-2050, 0, width, height);
  line(-2060,0, width, height);
  line(-2070,0, width, height); 
  line(-2080, 0, width, height);
  line(-2090, 0, width, height);

  line(-2100, 0, width, height);
  line(-2110, 0, width, height);
  line(-2120,0, width, height);
  line(-2130, 0, width, height);
  line(-2140,0, width, height);
  line(-2150, 0, width, height);
  line(-2160,0, width, height);
  line(-2170,0, width, height); 
  line(-2180, 0, width, height);
  line(-2190, 0, width, height);
  
  line(-2200, 0, width, height);
  line(-2210, 0, width, height);
  line(-2220,0, width, height);
  line(-2230, 0, width, height);
  line(-2240,0, width, height);
  line(-2250, 0, width, height);
  line(-2260,0, width, height);
  line(-2270,0, width, height); 
  line(-2280, 0, width, height);
  line(-2290, 0, width, height);
  
  line(-2300, 0, width, height);
  line(-2310, 0, width, height);
  line(-2320,0, width, height);
  line(-2330, 0, width, height);
  line(-2340,0, width, height);
  line(-2350, 0, width, height);
  line(-2360,0, width, height);
  line(-2370,0, width, height); 
  line(-2380, 0, width, height);
  line(-2390, 0, width, height);
  
  line(-2400, 0, width, height);
  line(-2410, 0, width, height);
  line(-2420,0, width, height);
  line(-2430, 0, width, height);
  line(-2440,0, width, height);
  line(-2450, 0, width, height);
  line(-2460,0, width, height);
  line(-2470,0, width, height); 
  line(-2480, 0, width, height);
  line(-2490, 0, width, height);
  
  line(-2500, 0, width, height);
  line(-2510, 0, width, height);
  line(-2520,0, width, height);
  line(-2530, 0, width, height);
  line(-2540,0, width, height);
  line(-2550, 0, width, height);
  line(-2560,0, width, height);
  line(-2570,0, width, height); 
  line(-2580, 0, width, height);
  line(-2590, 0, width, height);
  
  line(-2600, 0, width, height);
  line(-2610, 0, width, height);
  line(-2620,0, width, height);
  line(-2630, 0, width, height);
  line(-2640,0, width, height);
  line(-2650, 0, width, height);
  line(-2660,0, width, height);
  line(-2670,0, width, height); 
  line(-2680, 0, width, height);
  line(-2690, 0, width, height);
  
  line(-2700, 0, width, height);
  line(-2710, 0, width, height);
  line(-2720,0, width, height);
  line(-2730, 0, width, height);
  line(-2740,0, width, height);
  line(-2750, 0, width, height);
  line(-2760,0, width, height);
  line(-2770,0, width, height); 
  line(-2780, 0, width, height);
  line(-2790, 0, width, height);
  
  line(-2800, 0, width, height);
  line(-2810, 0, width, height);
  line(-2820,0, width, height);
  line(-2830, 0, width, height);
  line(-2840,0, width, height);
  line(-2850, 0, width, height);
  line(-2860,0, width, height);
  line(-2870,0, width, height); 
  line(-2880, 0, width, height);
  line(-2890, 0, width, height);
  
  line(-2900, 0, width, height);
  line(-2910, 0, width, height);
  line(-2920,0, width, height);
  line(-2930, 0, width, height);
  line(-2940,0, width, height);
  line(-2950, 0, width, height);
  line(-2960,0, width, height);
  line(-2970,0, width, height); 
  line(-2980, 0, width, height);
  line(-2990, 0, width, height);
  
  line(-3000, 0, width, height);
  line(-3010, 0, width, height);
  line(-3020, 0, width, height);
  line(-3030, 0, width, height);
  line(-3040, 0, width, height);
  line(-3050, 0, width, height);
  line(-3060, 0, width, height);
  line(-3070, 0, width, height);
  line(-3080, 0, width, height);
  line(-3090, 0, width, height);
  
  
  line(-3100, 0, width, height);
  line(-3110, 0, width, height);
  line(-3120,0, width, height);
  line(-3130, 0, width, height);
  line(-3140,0, width, height);
  line(-3150, 0, width, height);
  line(-3160,0, width, height);
  line(-3170,0, width, height); 
  line(-3180, 0, width, height);
  line(-3190, 0, width, height);
  
  line(-3200, 0, width, height);
  line(-3210, 0, width, height);
  line(-3220,0, width, height);
  line(-3230, 0, width, height);
  line(-3240,0, width, height);
  line(-3250, 0, width, height);
  line(-3260,0, width, height);
  line(-3270,0, width, height); 
  line(-3280, 0, width, height);
  line(-3290, 0, width, height);
  
  line(-3300, 0, width, height);
  line(-3310, 0, width, height);
  line(-3320,0, width, height);
  line(-3330, 0, width, height);
  line(-3340,0, width, height);
  line(-3350, 0, width, height);
  line(-3360,0, width, height);
  line(-3370,0, width, height); 
  line(-3380, 0, width, height);
  line(-3390, 0, width, height);
  
  line(-3400, 0, width, height);
  line(-3410, 0, width, height);
  line(-3420,0, width, height);
  line(-3430, 0, width, height);
  line(-3440,0, width, height);
  line(-3450, 0, width, height);
  line(-3460,0, width, height);
  line(-3470,0, width, height); 
  line(-3480, 0, width, height);
  line(-3490, 0, width, height);
  
  line(-3500, 0, width, height);
  line(-3510, 0, width, height);
  line(-3520,0, width, height);
  line(-3530, 0, width, height);
  line(-3540,0, width, height);
  line(-3550, 0, width, height);
  line(-3560,0, width, height);
  line(-3570,0, width, height); 
  line(-3580, 0, width, height);
  line(-3590, 0, width, height);
  
  line(-3600, 0, width, height);
  line(-3610, 0, width, height);
  line(-3620,0, width, height);
  line(-3630, 0, width, height);
  line(-3640,0, width, height);
  line(-3650, 0, width, height);
  line(-3660,0, width, height);
  line(-3670,0, width, height); 
  line(-3680, 0, width, height);
  line(-3690, 0, width, height);
  
  line(-3700, 0, width, height);
  line(-3710, 0, width, height);
  line(-3720,0, width, height);
  line(-3730, 0, width, height);
  line(-3740,0, width, height);
  line(-3750, 0, width, height);
  line(-3760,0, width, height);
  line(-3770,0, width, height); 
  line(-3780, 0, width, height);
  line(-3790, 0, width, height);
  
  line(-3800, 0, width, height);
  line(-3810, 0, width, height);
  line(-3820,0, width, height);
  line(-3830, 0, width, height);
  line(-3840,0, width, height);
  line(-3850, 0, width, height);
  line(-3860,0, width, height);
  line(-3870,0, width, height); 
  line(-3880, 0, width, height);
  line(-3890, 0, width, height);
  
  line(-3900, 0, width, height);
  line(-3910, 0, width, height);
  line(-3920,0, width, height);
  line(-3930, 0, width, height);
  line(-3940,0, width, height);
  line(-3950, 0, width, height);
  line(-3960,0, width, height);
  line(-3970,0, width, height); 
  line(-3980, 0, width, height);
  line(-3990, 0, width, height);
  
      
 
}
