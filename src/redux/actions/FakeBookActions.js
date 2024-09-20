import { ADD_COMMENT } from "../types/FakeBookTypes";

export const commentAction = (userComment) => ({
  type: ADD_COMMENT,
  userComment
})
