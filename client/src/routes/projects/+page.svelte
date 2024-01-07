<script>
    let projects = [
        { name: "Project Alpha", createdAt: "2021-01-01", lastUpdated: "2021-06-01", author: "Alice", summary: "Summary of Project Alpha", content: "Detailed content of Project Alpha" },
        { name: "Project Beta", createdAt: "2021-02-01", lastUpdated: "2021-07-01", author: "Bob", summary: "Summary of Project Beta", content: "Detailed content of Project Beta" },
    ];

</script>

<h1>Projects</h1>
<form method="POST" action="?/create">
    <input type="text" name="name" placeholder="Project Name" required />
    <input type="text" name="author" placeholder="Author" required />
    <textarea name="summary" placeholder="Project Summary" required></textarea>
    <textarea name="content" placeholder="Project Content" required></textarea>
    <button type="submit">Create Project</button>
</form>

<section>
    <h2>Projects</h2>
    {#each projects as project}
        <article>
            <h3>{project.name}</h3>
            <p>Created At: {project.createdAt}</p>
            <p>Last Updated: {project.lastUpdated}</p>
            <p>Author: {project.author}</p>
            <p>Summary: {project.summary}</p>
            <p>Content: {project.content}</p>
        </article>
    {/each}
</section>
