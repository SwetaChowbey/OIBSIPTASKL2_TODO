import "./JournalApp.css";
import Entry from "./Entry";
import useJournal from "./UseJournal";
import EntryList from "./EntryList";
function JournalApp() {
  const [entries, storeEntry, removeEntry] = useJournal();
  const handleAddEntry = (entry) => storeEntry(entry);
  const handleDeleteEntry = (index) => removeEntry(index);
  return (
    <>
      <div className="journal-box">
        <div className="container py-5 d-flex ">
          {/* <h1 className="text-center ">To-do</h1> */}
          <Entry addEntry={handleAddEntry} />
          <EntryList list={entries} deleteEntry={handleDeleteEntry} />
        </div>
      </div>
    </>
  );
}

export default JournalApp;
