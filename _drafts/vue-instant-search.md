---
layout: post
title: "Vue Instant Search With Empty Default Query"
---


## What is Vue Instant Search?

Vue Instant Search is a tool that allows for fast and instant front-end searches rather than offloading the search functionality to the server. 


## How to Set Up Vue Instant Search

1. Install Vue Instant Search as a dependency with npm or yarn

```
npm install vue-instant-search --save
```

2. Import Vue Instant Searc into your main.js file

```
import InstantSearch from 'vue-instantsearch';


Vue.use(InstantSearch);
```

3. Create the search interface within a Vue component

```
<template>
  	<ais-index :search-store="searchStore" index-name="title" :query="query">
       	<ais-results v-show="searchStore.query.length > 0">
            <template slot-scope="{ result }">
                <div class="searchResultsContainer">
                <div class="searchResult">
                    <a :href="'/books/' + result.id">
                    <h4 v-text="result.title"></h4>
                    <p v-text="result.author"></p>
                    </a>
                </div>
                </div>
            </template>
       	</ais-results>
    </ais-index>
</template>


<script>

    import { createFromAlgoliaCredentials } from 'vue-instantsearch';
    const searchStore = createFromAlgoliaCredentials(window.algolia.app_id, window.algolia.search_key);

    searchStore.indexName = 'title';

     export default {
        data() {
            return { 
                searchStore,
                query: ''
        	};
    	}
    }

</script>
```

4. Require the component in your main.js file

```
```


5. Set default search parameters to an empty string