#TODO implement kill watch in the Gruntfile, then remove this.

.PHONE: kill watch

input=index.coffee
pid_file=.watch.pid

kill:
	kill "$$(cat '$(pid_file)')"
	rm -f '$(pid_file)'

watch:
	nohup coffee -cw '$(input)' >/dev/null 2>&1 & echo "$$!" >'$(pid_file)'
