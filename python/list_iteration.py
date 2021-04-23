import sys

for i in range(len(sys.argv)):
	if i > 0:
		print(f"{i}. {sys.argv[i]}")
