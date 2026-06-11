const SuccessPage = ({
  title,
  message,
  actionBtnText,
  onActionClick,
}: {
  title: string;
  message: string;
  actionBtnText: string;
  onActionClick: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{message}</p>

      <button
        className="bg-primary text-white px-4 py-2 rounded-md"
        onClick={onActionClick}
      >
        {actionBtnText}
      </button>
    </div>
  );
};

export default SuccessPage;
