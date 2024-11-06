{
  //
  const message: unknown = "hello, Dev";
  //   const messageLength = message.length; will give warning
  const messageLength = (message as string).toString();

  console.log(messageLength);
}
