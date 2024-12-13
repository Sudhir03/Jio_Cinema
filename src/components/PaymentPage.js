import { useParams } from "react-router-dom";
import { useCinema } from "../contexts/jioCinemaContext";

function PaymentPage() {
  const { id } = useParams();
  const { plans } = useCinema();
  const plan = plans?.premium.ID === id ? plans.premium : plans.family;

  return <div>{console.log(plan)}</div>;
}

export default PaymentPage;
