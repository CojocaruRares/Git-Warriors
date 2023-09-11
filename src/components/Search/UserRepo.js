import React from "react";
import "./UserRepo.css"

function FormatDate(inputDate){
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2,'0');
  const month = String(date.getMonth() + 1).padStart(2,'0');
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`
  return formattedDate;
}

function UserRepo(props) {
  let repos = props.repos;
  return (
    <div>
      <h2>Latest Repos</h2>
      <div className="grid-box">
        {repos.map((repo, index) => {
          return (
            <div className="repo-box">
              <h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p>Main language: {repo.language}</p>
              <p>Updated at: {FormatDate(repo.updated_at)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserRepo;
