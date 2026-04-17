                //import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.101.1/dist/umd/supabase.min.js'   //nose pueden dos scripts?
                //import { createClient } from '@supabase/supabase-js'
                const supabaseUrl = "https://tszvowudspzdoqbemruw.supabase.co"
				const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzenZvd3Vkc3B6ZG9xYmVtcnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNTM5NDksImV4cCI6MjA5MDkyOTk0OX0.iEck81nx9OuQlOS6OLX7L0a0cqswkmzMKISMhvSFDgI"
				const supabasePublicClient = supabase.createClient(supabaseUrl, supabaseKey);
	            //const supabasePublicClient = createClient(supabaseUrl, supabaseKey);

				async function getData() {
                    const { data: records, error } = await supabasePublicClient      
					.from('test').select('*') // Select all columns
					const rows = records.map(row => `
                          <tr>
                          <td>${row.id}</td>
                          <td>${row.created_at}</td>
                          <td>${row.data}</td>
                          </tr>
                         `).join('');
					//if (error) {
				//		console.error('Error fetching data:', error.message)
					//	return
				//	}
                    console.table(records)
				//	console.log('Fetched Data:', records)
					document.getElementById('tabla-resultados').innerHTML = rows;
					
               }


                getData()

