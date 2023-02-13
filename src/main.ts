import Toastify from "toastify-js"
import { calculatePasswordStrength, generatePassword } from "./password-logic"

const RED = "red"
const ORANGE = "orange"
const YELLOW = "yellow"
const GREEN = "green"

const passwordInput: HTMLInputElement = document.querySelector(
  "#password"
) as HTMLInputElement
const clipboardButton: HTMLButtonElement = document.querySelector(
  ".btn-clipboard"
) as HTMLButtonElement

const rangeInput: HTMLInputElement = document.querySelector(
  ".input-length"
) as HTMLInputElement

const lengthDisplay: HTMLParagraphElement = document.querySelector(
  ".value-length-display"
) as HTMLParagraphElement

const controlPanel: HTMLDivElement = document.querySelector(
  "#control-panel"
) as HTMLDivElement

const checkboxUppercase: HTMLInputElement = document.querySelector(
  "#uppercase"
) as HTMLInputElement

const checkboxLowercase: HTMLInputElement = document.querySelector(
  "#lowercase"
) as HTMLInputElement

const checkboxNumbers: HTMLInputElement = document.querySelector(
  "#numbers"
) as HTMLInputElement

const checkboxSymbols: HTMLInputElement = document.querySelector(
  "#symbols"
) as HTMLInputElement

const passwordStrength: HTMLParagraphElement = document.querySelector(
  "#strength-level"
) as HTMLParagraphElement

const indicatorLight1: HTMLDivElement = document.querySelector(
  "#indicator-light-1"
) as HTMLDivElement

const indicatorLight2: HTMLDivElement = document.querySelector(
  "#indicator-light-2"
) as HTMLDivElement

const indicatorLight3: HTMLDivElement = document.querySelector(
  "#indicator-light-3"
) as HTMLDivElement

const indicatorLight4: HTMLDivElement = document.querySelector(
  "#indicator-light-4"
) as HTMLDivElement

const indicatorLightsAll: HTMLDivElement[] = Array.from(
  document.querySelectorAll(".indicator-light")
)

const generateButton: HTMLButtonElement = document.querySelector(
  "#btn-generate"
) as HTMLButtonElement

const successToast = Toastify({
  text: "Password copied!",
  duration: 2000,
  position: "center",
  style: {
    background: "#a4ffaf",
    color: "#18171f",
    boxShadow: "none"
  }
})

const errorToast = Toastify({
  text: "Error: could not copy password",
  duration: 2000,
  position: "center",
  style: {
    background: "#fb7c58",
    color: "#18171f",
    boxShadow: "none"
  }
})

clipboardButton.addEventListener("click", e => {
  e.preventDefault()
  clipboardButton.blur()
  navigator.clipboard.writeText(passwordInput.value).then(
    () => {
      successToast.showToast()
    },
    () => {
      errorToast.showToast()
    }
  )
})

rangeInput.addEventListener("input", () => {
  lengthDisplay.innerText = rangeInput.value
})

function passwordIsEmpty() {
  if (rangeInput.value === "0") {
    return true
  }
  if (
    checkboxUppercase.checked === false &&
    checkboxLowercase.checked === false &&
    checkboxNumbers.checked === false &&
    checkboxSymbols.checked === false
  ) {
    return true
  }
  return false
}

function resetStrengthMeter() {
  indicatorLightsAll.forEach(light => {
    light.classList.remove(RED)
    light.classList.remove(ORANGE)
    light.classList.remove(YELLOW)
    light.classList.remove(GREEN)
  })
  passwordStrength.innerText = ""
}

function setStrengthMeter(level: number) {
  resetStrengthMeter()
  if (level === 1) {
    indicatorLight1.classList.add(RED)
    passwordStrength.innerText = "Too Weak!"
  } else if (level === 2) {
    indicatorLight1.classList.add(ORANGE)
    indicatorLight2.classList.add(ORANGE)
    passwordStrength.innerText = "Weak"
  } else if (level === 3) {
    indicatorLight1.classList.add(YELLOW)
    indicatorLight2.classList.add(YELLOW)
    indicatorLight3.classList.add(YELLOW)
    passwordStrength.innerText = "Medium"
  } else if (level === 4) {
    indicatorLight1.classList.add(GREEN)
    indicatorLight2.classList.add(GREEN)
    indicatorLight3.classList.add(GREEN)
    indicatorLight4.classList.add(GREEN)
    passwordStrength.innerText = "Strong"
  }
}

controlPanel.addEventListener("input", () => {
  if (passwordIsEmpty()) {
    generateButton.disabled = true
    resetStrengthMeter()
    return
  }
  generateButton.disabled = false
  const level = calculatePasswordStrength(
    parseInt(rangeInput.value),
    checkboxUppercase.checked,
    checkboxLowercase.checked,
    checkboxNumbers.checked,
    checkboxSymbols.checked
  )
  setStrengthMeter(level)
})

generateButton.addEventListener("click", () => {
  generateButton.blur()
  const password = generatePassword(
    parseInt(rangeInput.value),
    checkboxUppercase.checked,
    checkboxLowercase.checked,
    checkboxNumbers.checked,
    checkboxSymbols.checked
  )
  passwordInput.value = password
})

export {}
