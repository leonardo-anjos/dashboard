
export const ActionsUtils = {

  forwardPayload: type => payload => ({
    type,
    payload
  }),

  simple: type => () => ({
    type
  })

};
