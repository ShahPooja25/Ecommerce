const FormatPrice = ({ price }) => {
    return (
      <span>
        {Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 2, // Corrected typo here
        }).format(price / 100)}
      </span>
    );
  };
  
  export default FormatPrice;