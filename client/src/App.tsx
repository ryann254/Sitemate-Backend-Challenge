import { useEffect, useState } from 'react';

interface Issue {
  id: string;
  title: string;
  description: string;
}

function App() {
  const [issues, setissues] = useState<Issue[]>([]);
  const [currentIssue, setCurrentIssue] = useState<Issue>({
    id: '1',
    title: '',
    description: '',
  });

  const fetchIssues = async () => {
    try {
      const result = await fetch('http://localhost:5000/api/v1/issue');
      const resultJSON = await result.json();

      if (result.ok) {
        setissues(resultJSON);
      }
      console.log(resultJSON);
    } catch (error) {
      console.error('Failed to fetch issues:', error);
    }
  };

  const createIssue = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:5000/api/v1/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentIssue),
      });
      const resultJSON = await result.json();

      if (result.ok) {
        console.log(resultJSON);
      }
    } catch (error) {
      console.error('Failed to create the issue:', error);
    }
  };

  const updateIssue = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const result = await fetch(
        `http://localhost:5000/api/v1/issue/${currentIssue.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(currentIssue),
        }
      );
      const resultJSON = await result.json();

      if (result.ok) {
        console.log(resultJSON);
      }
    } catch (error) {
      console.error('Failed to create the issue:', error);
    }
  };

  const deleteIssue = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const result = await fetch(
        `http://localhost:5000/api/v1/issue/${currentIssue.id}`,
        {
          method: 'DELETE',
        }
      );
      const resultJSON = await result.json();
      console.log(resultJSON);
    } catch (error) {
      console.error('Failed to create the issue:', error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className='max-w-screen-md mx-auto'>
      <h2 className='text-3xl font-bold'>Sitemate Issue Web App</h2>

      <div className='mt-5'>
        <h3 className='text-2xl font-bold'>Current Open Issues</h3>
        {issues.length ? (
          issues.map((issue, index) => (
            <div key={index}>
              <h4 className='text-xl font-semibold'>{issue.title}</h4>
              <p> - {issue.description}</p>
            </div>
          ))
        ) : (
          <p>No Issues Yet</p>
        )}
      </div>
      <div className='mt-3'>
        <form className='flex flex-col'>
          <input
            type='text'
            className='input input-bordered input-primary w-full max-w-xs mb-4'
            value={currentIssue.title}
            onChange={(e) =>
              setCurrentIssue({ ...currentIssue, title: e.target.value })
            }
          />
          <input
            type='text'
            className='input input-bordered input-primary w-full max-w-xs'
            value={currentIssue.description}
            onChange={(e) =>
              setCurrentIssue({ ...currentIssue, description: e.target.value })
            }
          />
          <button
            className='btn btn-primary mb-4 mt-7 w-[42%]'
            onClick={(e) => createIssue(e)}
          >
            Create Issue
          </button>
          <button
            className='btn btn-secondary mb-4 w-[42%]'
            onClick={(e) => updateIssue(e)}
          >
            Update Issue
          </button>
          <button
            className='btn btn-error w-[42%]'
            onClick={(e) => deleteIssue(e)}
          >
            Delete Issue
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
