<div className="signup">
      {!user && (
        <NavLink
          to="/login"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <MdPersonOutline></MdPersonOutline>
          {/* Login */}
        </NavLink>
      )}
      {user && (
        <NavLink
          onClick={handleLogout}
          to="#"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Logout
        </NavLink>
      )}
</div>
