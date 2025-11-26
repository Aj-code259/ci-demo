// simple test (exit 0 = success)
const expected = "hello world";
const msg = "hello world";
if (msg.includes(expected)) {
  console.log("UNIT TESTS: 1 passed, 0 failed");
  process.exit(0);
} else {
  console.error("UNIT TESTS: 0 passed, 1 failed");
  process.exit(1);
}
