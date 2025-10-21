<<<<<<< HEAD
import { memo } from "react";

=======
>>>>>>> e3f6466 (foto toegevoegd)
function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

<<<<<<< HEAD
export default memo(ToggleSounds);
=======
export default ToggleSounds;
>>>>>>> e3f6466 (foto toegevoegd)
