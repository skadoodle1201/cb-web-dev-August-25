const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 100);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 2000);
});
const p4 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(4);
  }, 800);
});

async function usePromises() {
  try {
    console.time();
    const results = await Promise.allSettled([p1, p2, p3, p4]);
    console.timeEnd();
    console.log(results);
  } catch (error) {
    console.log(error);
    console.timeEnd();
  }
}

usePromises();
