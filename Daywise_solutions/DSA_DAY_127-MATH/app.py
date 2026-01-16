
def check_perfect_number(num):
    if num <= 1:
        return False
    sum_divisors = 0
    for i in range(1,  num // 2 + 1):
        if num % i == 0:
            sum_divisors += i
    return sum_divisors == num

# Example usage
print(check_perfect_number(28))