//Do not run this file
// Test for memory leak
const files = [];
 
while (true) {
  const file = await Deno.open("main.ts");
  const fileCount = files.push(file);
  console.log(`Pushing... file #${fileCount}`);
}