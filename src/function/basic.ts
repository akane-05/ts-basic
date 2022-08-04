//aro-
export const logMes = (message: string): void => {
  console.log('sample 1:', message)
}

export function logMes2(message: string): void {
  console.log('sample 2:', message)
}

export const ligMes3 = function (message: string): void {
  console.log('sample 3:', message)

  let sample2: unknown = 7
  if (typeof sample2 === 'number') {
    sample2 = sample2 + 7
  }
}

export const logMes4 = (message: string): void => console.log('sample 4:', message)

export const throwerror = (message: string): never => {
  throw new Error(message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage6: FullLogMessage = (message) => {
  console.log('Function basic sample 6:', message)
}

type FuncTemp1 = {
  (sample: string): number
} //きちんと書いた型シグネチャ

export const Func: FuncTemp1 = (test) => {
  return 10
}
