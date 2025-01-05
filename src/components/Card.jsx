/* eslint-disable react/prop-types */
const Card = ({ style, children }) => {
  return (
    <div className={`w-full py-7 px-12 rounded-2xl ${style}`}>{children}</div>
  );
};

export default Card;
