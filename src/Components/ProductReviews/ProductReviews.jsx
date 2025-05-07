import Review from "./Review";
import "./ProductReviews.css";

export default function ProductReviews({ reviews }) {
  return (
    <>
      <h2 className="customer-comment">Reviews :</h2>
      <div className="reviews">
        {reviews?.map((review, index) => (
          <Review review={review} index={index} />
        ))}
      </div>
    </>
  );
}
