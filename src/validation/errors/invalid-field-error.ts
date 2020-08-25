export class InvalidFieldError extends Error {
  constructor (fieldLabel: string) {
    super(`Campo ${fieldLabel} inválido`)
    this.name = 'InvalidFieldError'
  }
}
