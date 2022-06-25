import numpy as np
import random

def toFixed(numObj, digits=0):
    return f"{numObj:.{digits}f}"

const_n = 4
a = np.arange(1,const_n + 1,dtype=float)
i = 0
while(i != a.size):
    a[i] = toFixed(random.uniform(1.0,100.0),2)
    print(a[i])
    i += 1
print(a,"Default")

np.savetxt("outfile.txt",a,fmt='%1.2f')
a.sort()

print(a,"Sorted")

type = a[0]
a[0] = a[const_n - 1]
a[const_n - 1] = type

print(a,"Sorted, numbers")

np.savetxt("outfile.txt",a,fmt='%1.2f')