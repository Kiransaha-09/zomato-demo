import Review from "./Review";
import "./ProductReviews.css";

export default function ProductReviews({ reviews }) {
  return (
    <>
      <p className="customer-comment">Customer reviews :</p>
      <div className="reviews">
        {reviews?.map((review, index) => (
          <Review review={review} index={index} />
        ))}
      </div>
    </>
  );
}
