const express = require('express')

const app = express()

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'POST, GET, PATCH, DELETE, OPTIONS'
	)
	next()
})

app.use('/api/recipes', (req, res, next) => {
	const details =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam optio omnis dicta ipsa nobis minus corporis ut dolor alias molestiae, non quis iure rem cum sit magnam praesentium fugiat modi impedit in! Quo ad sit libero dolor eaque quas, quibusdam repellat sint, optio accusantium nulla facilis asperiores fuga adipisci. Veritatis quos omnis error mollitia nobis harum, similique libero quidem nihil enim amet voluptatem consequuntur pariatur? Facilis perspiciatis odit saepe illum maiores nulla cupiditate repudiandae sint. Dolorem voluptatum ex nisi distinctio fugiat sit obcaecati quo nulla facilis, earum velit. Aperiam provident delectus hic quibusdam laborum non veniam, est optio quia perferendis repudiandae temporibus id natus sunt! Laudantium atque vero dolore quasi molestiae, saepe adipisci placeat molestias. Ut quibusdam eos, odio accusantium temporibus magnam maiores similique. Dolore cupiditate recusandae laborum assumenda praesentium totam nesciunt, enim iusto ducimus sunt voluptatum, voluptates reprehenderit, necessitatibus odit itaque voluptas aperiam quas doloribus nihil corporis? Necessitatibus dolorem atque ut reiciendis. Commodi ducimus iste eius quibusdam explicabo dicta animi hic qui unde temporibus enim architecto, repellendus dolorum dolores quam dolorem perspiciatis magnam non consequatur laudantium culpa dolor? Blanditiis illo voluptas dolores in exercitationem doloribus necessitatibus aspernatur accusamus, earum cum deleniti quas eveniet error sunt iusto beatae animi temporibus.'

	const recipes = [
		{
			description: 'Grilled Chicken with Vegetables.',
			details: details,
			imagePath:
				'https://us.123rf.com/450wm/gbh007/gbh0071304/gbh007130400227/19108392-cuisse-de-poulet-grill%C3%A9-avec-des-l%C3%A9gumes.jpg?ver=6',
			ingredients: [
				{
					amount: 5,
					name: 'Chicken',
				},
				{
					amount: 10,
					name: 'Vegetables',
				},
			],
			name: 'Grilled Chicken',
		},
		{
			description: 'Delicious Well Cooked Grilled Steak With French Fires.',
			details: details,
			imagePath:
				'https://previews.123rf.com/images/nitr/nitr1302/nitr130200048/18032406-grilled-steak-with-french-fries.jpg',
			ingredients: [
				{
					amount: 2,
					name: 'Steak',
				},
				{
					amount: 10,
					name: 'Fries',
				},
			],
			name: 'Grilled Steak with French Fries',
		},
		{
			description: 'Tasty Spaghetti Bolognese.',
			details: details,
			imagePath:
				'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-tall-FS-0204.jpg',
			ingredients: [
				{
					amount: 20,
					name: 'Spaghetti',
				},
				{
					amount: 50,
					name: 'Bolognese',
				},
			],
			name: 'Spaghetti Bolognese',
		},
		{
			description: 'Best Shakshuka Recipe.',
			details: details,
			imagePath:
				'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
			ingredients: [
				{
					amount: 6,
					name: 'Eggs',
				},
				{
					amount: 5,
					name: 'Tomatoes',
				},
			],
			name: 'Shakshuka',
		},
		{
			description: 'Fried Rice Recipe.',
			details: details,
			imagePath:
				'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg',
			ingredients: [
				{
					amount: 5,
					name: 'Rice',
				},
				{
					amount: 10,
					name: 'Vegetables',
				},
				{
					amount: 1,
					name: 'Garlic',
				},
				{
					amount: 10,
					name: 'Peas',
				},
				{
					amount: 2,
					name: 'Carrot',
				},
			],
			name: 'Fried Rice',
		},
	]

	res.json({ message: 'Successfull', recipes: recipes })
})

module.exports = app
