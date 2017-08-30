import * as types from './types'

export const confirm = ({
  commit
}, content, handle) => {
  commit(types.SHOW_CONFIRM, {
    content,
    handle
  })
}

export const message = ({
  commit
}, content, type) => {
  commit(types.SHOW_MESSAGE, {
    content,
    type
  })
}
