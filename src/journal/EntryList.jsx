function EntryList({ list, deleteEntry }) {
  const handleDeleteClick = (index) => (e) => {
    deleteEntry(index);
  };
  return (
    <div className="entry-list m-5">
      {list &&
        list.map((item, i) => {
          const flagColor = item.flag ? `bg-${item.flag} text-white` : "";
          return (
            <div className={`card mb-2 ${flagColor}`}>
              <div className="card-body">
                <p className="card-text">{item.message}</p>
                <button
                  className="btn btn-sm btn-info"
                  onClick={handleDeleteClick(i)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default EntryList;
