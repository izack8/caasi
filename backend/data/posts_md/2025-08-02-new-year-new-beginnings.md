# Async, Await

When you use `await` in Python, you're telling the program:

> "Pause this function here. Let other things run while we wait for this task to finish. When it's done, resume from this point."
> 

---

### Why is this useful?

In regular (synchronous) code, if something takes time—like downloading a file—it **blocks everything else** until it's done.

With `await`, you let the program **do other things while waiting**, like handling another download, updating a UI, or responding to a user.

---

### Example (with `asyncio.sleep`):

```python
python
CopyEdit
import asyncio

async def say_after(delay, message):
    await asyncio.sleep(delay)
    print(message)

async def main():
    print("Start")
    await say_after(2, "Hello")  # Pauses here for 2 seconds
    print("End")

asyncio.run(main())

```

**What happens:**

- `"Start"` prints immediately.
- Program **pauses** at `await asyncio.sleep(2)` for 2 seconds.
- Then prints `"Hello"` and `"End"`.

---

### Better example: Running two tasks concurrently

```python
python
CopyEdit
async def main():
    task1 = asyncio.create_task(say_after(2, "Hello"))
    task2 = asyncio.create_task(say_after(2, "World"))

    print("Start both tasks")
    await task1
    await task2
    print("Done")

asyncio.run(main())

```

**Output:**

```
sql
CopyEdit
Start both tasks
Hello
World
Done

```

Takes ~2 seconds total, not 4, because both tasks run at the same time and the program pauses *only* when needed.

---

So:

- `await` pauses the *current function*.
- It doesn’t block the whole program.
- Python can do other work in the meantime (like handling other async tasks).

<aside>
💡

You can still use an async function without “await”, but it returns a **coroutine** object.

</aside>