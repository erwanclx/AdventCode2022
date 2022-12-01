import pyfiglet

split = pyfiglet.figlet_format("----------")
print(split)
# -----------* part 1 - day 1 *----------- #
part1_banner = pyfiglet.figlet_format("PART 1 - DAY 1")
print(part1_banner)
with open ('day1/data.txt', 'r') as dataFile:
    data = dataFile.read().splitlines()
    total = 0
    calories_list = []

    for i in range(len(data)):
        try:
            total += int(data[i])
        except:
            calories_list.append(total)
            total = 0

    print(sorted(calories_list, reverse=True)[0])

# -----------* part 2 - day 1 *----------- #
part2_banner = pyfiglet.figlet_format("PART 2 - DAY 1")
print(part2_banner)
with open ('day1/data.txt', 'r') as dataFile:
    data = dataFile.read().splitlines()
    total = 0
    calories_list = []

    for i in range(len(data)):
        try:
            total += int(data[i])
        except:
            calories_list.append(total)
            total = 0

    print(sum(sorted(calories_list, reverse=True)[0:3]))

    # -----------* DAY 2 *----------- #
    print(split)
    # -----------* DAY 2 *----------- #