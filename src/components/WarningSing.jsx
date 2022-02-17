import { Alert} from "react-bootstrap";

const WarningSing = ({content}) => {
    return (
        <>
        <Alert className="text-center my-3" variant="danger">
    {content}
  </Alert>
     </>
    )
}

export default WarningSing