a=[]
print("Enter 5 numbers:")
for i in range(5):
    b=int(input("Enter number"+str(i+1)+":"))
    a.append(b)
print(a)
sum=0
for i in a:
    sum=sum+i
print(sum)
