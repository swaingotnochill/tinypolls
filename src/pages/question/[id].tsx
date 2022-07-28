import { useRouter } from "next/router"
import { trpc } from "../../utils/trpc"

const QuestionById: React.FC<{id: string }> = ({id}) => {
    const { data, isLoading } = trpc.useQuery(["question.getById", {id}])

    if( !isLoading && !data) return <div>Question Not Found!!!</div>

    return <div>{data?.question}</div>
}
const QuestionPage = () => {
    const {query } = useRouter()
    const { id } = query
    if(!id || typeof id !== 'string') return <div>No id</div>
    return <QuestionById id={id}/>
}

export default QuestionPage