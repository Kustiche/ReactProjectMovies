export default function Sidebar({ onClick }) {
  return (
    <>
      <aside className="hero__sidebar sidebar">
        <h2 className="sidebar__title">Find movie</h2>
        <form className="sidebar__form" method="POST">
          <div className="sidebar__inner">
            <input className="sidebar__search" name="search" type="text" required placeholder="Search..." />
            <button className="sidebar__button btn-reset" onClick={onClick}>
              Find
            </button>
          </div>
          <h3 className="sidebar__heading">Year of release</h3>
          <input className="sidebar__year" name="year" type="text" placeholder="Enter..." />
        </form>
      </aside>
    </>
  );
}
