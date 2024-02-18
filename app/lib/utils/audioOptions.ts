
export const play = (test: HTMLAudioElement | null) => {
  test?.play()
}

export const stop = (test: HTMLAudioElement | null) => {
  test?.pause()
}

export const mute = (test: HTMLAudioElement | null) => {
  if (test) {
    test.volume = 0
  }
}

export const unmute = (test: HTMLAudioElement | null) => {
  if (test) {
    test.volume = 1
  }
}

export const volume = (test: HTMLAudioElement | null) => {
  if (test) {
    test.volume = 0.5
  }
}