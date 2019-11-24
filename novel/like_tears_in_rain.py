!pip install weasyprint

import random 
#roy batty monologue
novel = '<p>'

#name of novel 
novel ='<h1>- like  t e a r s  in  r a i n -</h1> <p>'
#code prints 358 pages 
for line in range(10000):
  novel += '</p><p>'
  s  = random.randrange(0,10)
  if (s < 4):
  #print and repeat quote
    novel +="like        t e a r s  in         R  A  I  N"  
  #seperate line >
  elif (s > 2):
    novel += '<em>                a                 D  O  V  E        ascends  </em>'
   
   #open html code
with open ('in.txt', 'w') as f:
  f.write(novel)
#font-family: Courier;
# <body>
#body {{ pre

  html_template = f"""
  <html>
    <head>
    <title>Like Tears in the Rain</title>
    </style>
    <pre>

  </head>

  {novel}</div>

  <pre>
   
  

</html>
"""

import random
from weasyprint import HTML

HTML(string=html_template).write_pdf("liketearsinrain.pdf")
