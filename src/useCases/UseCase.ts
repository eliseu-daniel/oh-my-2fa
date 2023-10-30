export default interface UseCase<I, O> {
  execute(input: I): O
}
