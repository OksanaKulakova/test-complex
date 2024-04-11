import { getReviews } from "@/app/lib/actions";
import ReviewCard from "@/app/components/review/review-card";

export default async function ReviewList() {
  const reviews = await getReviews();

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}
