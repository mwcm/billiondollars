import re, sys, os

#variables for file paths
infile = "static/aeiou.html"
outfile = "aeiou2.html"

with open(infile, newline='\n', encoding='utf-8-sig') as f:

	out = open(outfile, "w")

	content = str(f.readlines())

	count = 1
	for item in content.split("</td>"):
		if "<td>" in item:
			item = item.replace("<td>",'<td id ='+str(count)+'>')
			out.write(item)
			count = count + 1


	out.close()