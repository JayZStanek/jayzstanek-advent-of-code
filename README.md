# 🎄 Advent of Code - Day 16: Aunt Sue (Parts 1 & 2) - README

## 🧩 Problem Summary

You're trying to identify the real Aunt Sue who gave you a gift. Each of the 500 candidates describes a few of their possessions. You compare their known properties against a sample result provided by a device called the **MFCSAM**.

- In **Part 1**, you must find the Aunt Sue whose listed properties **exactly match** the MFCSAM values.
- In **Part 2**, some of the MFCSAM results must be interpreted with **special matching rules**:
  - `cats`, `trees`: **greater than** target
  - `pomeranians`, `goldfish`: **less than** target
  - All other properties: **equal to** target

---

## ✅ Approach

1. **Input Parsing**
   - Each line is parsed with regex to extract the Sue number and a map of her known properties.

2. **Part 1 Logic**
   - Compares each listed property of a Sue directly with the MFCSAM data using strict equality (`===`).

3. **Part 2 Logic**
   - Applies conditional matching per property:
     - `>` for `cats`, `trees`
     - `<` for `pomeranians`, `goldfish`
     - `===` for everything else

4. **Output**
   - Logs the matching Aunt Sue number for both parts.

---

## 🧠 AI Integration & Helpfulness

AI tools enhanced productivity and code clarity in multiple areas:

- **ChatGPT** helped break down the puzzle and suggested clean abstractions for parsing and matching logic.
- **Copilot** provided inline suggestions for repetitive tasks like loop construction and comparisons.

> AI assistance was **especially helpful** in:
> - Generating regex for input parsing
> - Writing reusable match-checking logic

---

## 🛠️ Technologies Used

- JavaScript (Node.js)
- AI Tools: ChatGPT, Copilot

---

## 🧪 Running the Code

1. Make sure Node.js is installed.
2. From the root of the repo or inside `day16`, run:

```bash
node part1.js   # For Part 1 result
node part2.js   # For Part 2 result


