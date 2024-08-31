# 1074 Z
# 시간초과
def travel(N, p, q):
    global r
    global c
    global cnt
    d = [
        (-1, -1),
        (-1, 0),
        (0, -1),
        (0, 0),
    ]
    if N == 1:
        for dr, dc in d:
            # print(p+dr, q+dc, cnt)
            if (p+dr, q+dc) == (r, c):
                print(cnt)
                return
            cnt += 1
    else:
        travel(N-1, p//2, q//2)
        travel(N-1, p//2, q)
        travel(N-1, p, q//2)
        travel(N-1, p, q)


N, r, c = map(int, input().split())
cnt = 0
travel(N, 2**N-1, 2**N-1)
