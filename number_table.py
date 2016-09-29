import re, sys, os

#variables for file paths
infile = 'static/aeiou.html'
outfile = 'aeiou2.html'

with open(infile, newline='\n', encoding='utf-8-sig') as f:

	out = open(outfile, 'w')
	content = str(f.readlines())
	
	content = content.replace('\\t','').replace('\\n','').replace('\\r','').replace('\'','').replace(',','').replace('100','100,').strip('[]')

	count = 1
	for item in re.split('</td>',content):
		if '<td>' in item:
			item = item.replace('<td>','<td id ='+str(count)+'>')
			out.write(item+"</td>")
			count = count + 1


	out.close()
