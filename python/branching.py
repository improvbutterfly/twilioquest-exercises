import sys

result = int(sys.argv[1]) + int(sys.argv[2])
if result <= 0:
	print("You have chosen the path of destitution.")

elif result <= 100:
	print("You have chosen the path of plenty.")
else:
	print("You have chosen the path of excess.")
