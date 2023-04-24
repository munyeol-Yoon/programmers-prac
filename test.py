from random import *
lst = range(1, 21) # 1부터 20까지 숫자
lst = list(lst)

shuffle(lst)

win = sample(lst, 4) # 4명 중에서 1명은 치킨, 3명은 커피


print("-- 당첨자 발표 --")
print("치킨 당첨자 : {}".format(win[0]))
print("커피 당첨자 : {}".format(win[1:]))
print("-- 축하합니다 --")