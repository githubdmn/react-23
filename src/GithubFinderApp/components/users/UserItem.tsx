import UserType from '../../types/UserType';

function UserItem(user: UserType) {
  return (
    <div className=" card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt="Profile" />
            </div>
            <div>
              <div>
                <div className="font-bold">{user.login}</div>
                <div className="text-sm opacity-50">{user.login}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserItem;
