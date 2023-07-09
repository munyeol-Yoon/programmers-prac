


def solution(brown, yellow):
    width = brown / 2 + 1
    height = 1

    while width >= height:
        if (width - 2) * (height - 2) == yellow:
            return [int(width), int(height)]
        width -= 1
        height += 1


print(solution(10, 2))

# import math
# def calculate_width(brown, size):
#     discriminant = (2 + brown/2) ** 2 - 4  * size # 판별식

# 판별식이 0이면 중근이므로 실근 하나만 존재
#     if discriminant == 0:
#         w = (2 + brown/2) / 2
#         return w

# 판별식이 양수면 두 개의 실근이 존재
#     if discriminant > 0:
#         w = ((2 + brown/2) + math.sqrt(discriminant)) / 2
#         return w

# def solution(brown, yellow):
#     size = brown + yellow

#     width = calculate_width(brown, size)
#     height = size / width

#     answer = [width, height]
#     return answer

# print(solution(10, 2)); # [4, 3]
# 근의 공식