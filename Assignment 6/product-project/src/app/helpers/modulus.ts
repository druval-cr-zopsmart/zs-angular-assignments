function modulus(value: number, mod: number) {
  return ((value % mod) + mod) % mod;
}

export default modulus;