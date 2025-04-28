import Review from "./Review";

export default function ProductReviews({reviews}) {
  return (
    <>
      <p className="customer-comment">Customer reviews :</p>
      <div className="reviews">
        {reviews?.map((review, index) => (
          <Review review={review} index={index}/>
        ))}
      </div>
    </>
  );
}
